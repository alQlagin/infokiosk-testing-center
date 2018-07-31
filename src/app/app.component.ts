import {ChangeDetectorRef, Component} from '@angular/core';
import {Languages} from './models/Languages';
import {StagesEnum} from './models/stages.enum';
import {ApiClientService} from './api-client.service';
import {filter, map, tap} from 'rxjs/operators';
import {Regula} from './regula/regula.service';
import {RegulaFields} from './regula/regula.fields';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly STAGES = StagesEnum;
  stage: StagesEnum = StagesEnum.VIDEO_INSTRUCTION;
  passport: any;
  language: Languages = Languages.RU;
  regulaData;
  error: string;

  constructor(private readonly api: ApiClientService, private regula: Regula, private cd: ChangeDetectorRef) {
    this.regula.connect()
      .pipe(
        filter(() => (this.stage !== StagesEnum.VIEW_NUMBER) && !this.error),
        map(data => data && data.filter(item => Object.values(RegulaFields).includes(item.field))),
        filter((v) => !!(v && v.length)),
        tap(v => {
          // this.stage = StagesEnum.SCAN_PASSPORT;
        })
        // filter(passport => !!passport)
      )
      .subscribe((data) => {
        this.regulaData = data;
        const passport: any = {};
        data.forEach(({field, value}) => {
          switch (field) {
            case RegulaFields.DateofBirth:
              passport.date_of_birth = value.split('.').reverse().join('-');
              break;
            case RegulaFields.DocumentNumber:
              passport.passport_series = value;
              break;
            case RegulaFields.GivenNames:
              passport.first_name = value;
              break;
            case RegulaFields.Surname:
              passport.last_name = value;
              break;
            default:
              return null;
          }
        });
        this.onPassportReady(passport);
        cd.detectChanges();
      });
  }

  onLanguageSelect(language: Languages) {
    this.language = language;
    this.stage = StagesEnum.SCAN_PASSPORT;
  }

  onPassportReady(data) {
    this.error = null;
    this.api.createVisit(data)
      .subscribe(
        passport => {
          this.passport = passport;
          this.stage = StagesEnum.VIEW_NUMBER;
          this.cd.detectChanges();
        },
        response => {
          switch (response.error) {
            case 'Passport has already passed today. Number: 1':
              this.error = 'Вы уже получали сегодня талон';
              break;
            case 'Queue limit exceeded':
              this.error = 'Лимит номеров на сегодня исчерпан';
              break;
          }

          this.cd.detectChanges();
          setTimeout(() => {
            this.error = null;
            this.cd.detectChanges();
          }, 2000);
        }
      );
  }

  onPassportCancel() {
    this.stage = StagesEnum.VIDEO_INSTRUCTION;
    this.cd.detectChanges();
    this.regula.reset();
  }
}
