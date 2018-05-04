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
  passport: any;
  stage: StagesEnum = StagesEnum.SCAN_PASSPORT;
  language: Languages = Languages.RU;
  regulaData;

  constructor(private readonly api: ApiClientService, private regula: Regula, private cd: ChangeDetectorRef) {
    this.regula.connect()
      .pipe(
        map(data => data && data.filter(item => Object.values(RegulaFields).includes(item.field))),
        filter((v) => !!(v && v.length)),
        tap(v => {
          this.stage = StagesEnum.SCAN_PASSPORT;
          console.log(v);
        })
        // throttleTime(2000),
        // filter(passport => !!passport)
      )
      .subscribe((data) => {
        this.regulaData = data;
        cd.detectChanges();
      });
  }

  onLanguageSelect(language: Languages) {
    this.language = language;
    this.stage = StagesEnum.SCAN_PASSPORT;
  }

  onPassportReady(data) {
    this.api.createVisit(data)
      .subscribe((passport) => {
        this.passport = passport;
        this.stage = StagesEnum.VIEW_NUMBER;
        this.cd.detectChanges();
      });
  }

  onPassportCancel() {
    this.stage = StagesEnum.VIDEO_INSTRUCTION;
    this.cd.detectChanges();
    this.regula.reset();
  }
}
