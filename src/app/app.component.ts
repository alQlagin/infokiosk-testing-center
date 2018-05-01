import {Component} from '@angular/core';
import {Languages} from './models/Languages';
import {StagesEnum} from './models/stages.enum';
import {ApiClientService} from './api-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly STAGES = StagesEnum;
  passport: any;
  stage: StagesEnum = StagesEnum.SELECT_LANGUAGE;
  language: Languages = Languages.RU;

  constructor(private readonly api: ApiClientService) {
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
      });
  }

  onPassportCancel() {
    this.stage = StagesEnum.SELECT_LANGUAGE;
  }
}
