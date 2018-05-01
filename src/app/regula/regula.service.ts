import {Injectable} from '@angular/core';
import {CheckReaderResultXML, getFromEnum, initRegulaReader, IsReaderResultTypeAvailable, RestartSdk} from './regula.sdk.apiClient';
import {eRPRM_ResultType, eVisualFieldTypeStrings, systemNotificationCodes} from './regula.sdk.enums';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {bindCallback} from 'rxjs/observable/bindCallback';

const $ = (window as any).jQuery;

const RestartSdkAsObservable = bindCallback(RestartSdk);

@Injectable()
export class Regula {
  private connected = false;
  private readonly stream$ = new BehaviorSubject<Array<{ field, value }>>(null);


  connect() {

    if (!this.connected) {
      initRegulaReader('https://localhost:443/Regula.SDK.Api', false, {
        OnProcessingFinishedCallback: () => this.OnProcessingFinishedCallback(),
        OnSystemNotificationCallback: (notification) => this.OnSystemNotificationCallback(notification)
      });
      this.connected = true;
    }
    return this.stream$.asObservable();
  }

  restartSdk() {
    return RestartSdkAsObservable();
  }

  private OnSystemNotificationCallback(systemNotificationCode) {
    switch (systemNotificationCode) {
      case systemNotificationCodes.BatteriesCritical:
        console.log('REGULA SYSTEM NOTIFICATION: BatteriesCritical');
        break;
      case systemNotificationCodes.DeviceShutdown:
        console.log('REGULA SYSTEM NOTIFICATION: DeviceShutdown');
        break;
      case systemNotificationCodes.SdkRestart:
        console.log('REGULA SYSTEM NOTIFICATION: SdkRestart');
        break;
      default:
        console.log('REGULA SYSTEM NOTIFICATION:', systemNotificationCode);
    }
  }


  private OnProcessingFinishedCallback() {
    // Getting text results comparison
    IsReaderResultTypeAvailable(eRPRM_ResultType.RPRM_ResultType_OCRLexicalAnalyze, (count) => {
      for (let i = 0; i < count; i++) {
        CheckReaderResultXML(
          eRPRM_ResultType.RPRM_ResultType_OCRLexicalAnalyze,
          i,
          0,
          (data) => this.ParseLexicalData(data)
        );
      }
    });
  }

  private ParseLexicalData(data) {
    const result = [];
    $($.parseXML(data)).find('Document_Field_Analysis_Info').each((key, element) => {
      const fieldType = getFromEnum(
        eVisualFieldTypeStrings,
        $(element).children('Type')[0].textContent
      ).replace(/^str/, '');
      result.push({field: fieldType, value: $(element).children('Field_MRZ')[0].textContent});
    });
    this.stream$.next(result);
  }

}
