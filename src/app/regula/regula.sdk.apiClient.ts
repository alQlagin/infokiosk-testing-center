/* tslint:disable */
let serviceUrl;
const jQuery = (window as any).jQuery;
const $ = jQuery;

/*=====/Settings=====*/

export function GetPropertyValue(propertyName, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Settings/GetPropertyValue?propertyName=' + propertyName,
    type: 'GET',
    contentType: 'application/json;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function SetPropertyValue(propertyName, value, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Settings/SetPropertyValue?propertyName=' + propertyName,
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(value),
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

/*=====/Methods=====*/

export function AppendImage(AImage, AFormat, ALightType, APageIndex, successFunction) {
  jQuery.support.cors = true;
  const img = AImage.replace('data:image/jpeg;base64,', '');
  $.ajax({
    url: serviceUrl + '/Methods/AppendImage?AFormat=' + AFormat + '&ALightType=' + ALightType + '&APageIndex=' + APageIndex,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(img),
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function AppendImageFromFile(AFileName, ALightType, APageIndex, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/AppendImageFromFile?AFileName=' + AFileName + '&ALightType=' + ALightType + '&APageIndex=' + APageIndex,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function BatteryStatusByIdx(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/BatteryStatusByIdx?index=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function Calibrate(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/Calibrate',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function CancelOpticalOperation(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CancelOpticalOperation',
    type: 'POSt',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function CheckReaderImageLight(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckReaderImageLight?AIdx=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function CheckReaderImagePageIndex(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckReaderImagePageIndex?AIdx=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function CheckReaderResult(type, index, output, param, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckReaderResult?AType=' + type + '&AIdx=' + index + '&AOutput=' + output + '&AParam=' + param,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function CheckReaderResultFromList(container, output, param, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckReaderResultFromList?AContainer=' + container + '&AOutput=' + output + '&AParam=' + param,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function CheckReaderResultXML(type, index, output, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckReaderResultXML?AType=' + type + '&AIdx=' + index + '&AOutput=' + output,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function CheckRFIDResult(type, output, param, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckRFIDResult?AType=' + type + '&AOutput=' + output + '&AParam=' + param,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function CheckRFIDResultFromList(container, output, param, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckRFIDResultFromList?AContainer=' + container + '&AOutput=' + output + '&AParam=' + param,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function CheckRFIDResultXML(type, output, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckRFIDResultXML?AType=' + type + '&AOutput=' + output,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function CheckUpdates(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckUpdates',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function ClearResults(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/ClearResults',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function Connect(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/Connect',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function Disconnect(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/Disconnect',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function DoProcessImage(AFilename, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/DoProcessImage?AFilename=' + AFilename,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function DoProcessImages(AFolder, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/DoProcessImages?AFolder=' + AFolder,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function get_AvailableDevices(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/get_AvailableDevices?Index=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function get_AvailableGraphicFormats(Index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/get_AvailableGraphicFormats?Index=' + Index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      successFunction(data);
    }
  });
}

export function get_AvailableLanguages(Index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/get_AvailableLanguages?Index=' + Index,
    type: '',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      successFunction(data);
    }
  });
}

export function GetBarcodeModuleCount(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetBarcodeModuleCount',
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetBarcodeModuleDataByIdx(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetBarcodeModuleDataByIdx?AIdx=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetGraphicFieldByTypeAndSource(type, source, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetGraphicFieldByTypeAndSource?AType=' + type + '&ASourceType=' + source,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetImages(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetImages',
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetReaderBitmapImage(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderBitmapImage?AIdx=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetReaderBitmapImageByLightIndex(light, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderBitmapImageByLightIndex?ALight=' + light,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetReaderBitmapImageByLightIndexAndPageIndex(light, page, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderBitmapImageByLightIndexAndPageIndex?ALight=' + light + '&APageIndex=' + page,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetReaderEOSBitmapImage(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderEOSBitmapImage?AIdx=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetReaderEOSBitmapImageByLightIndex(light, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderEOSBitmapImageByLightIndex?ALight=' + light,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetReaderEOSBitmapImageByLightIndexAndPageIndex(light, page, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderEOSBitmapImageByLightIndexAndPageIndex?ALight=' + light + '&APageIndex=' + page,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetReaderFileImage(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderFileImage?AIdx=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetReaderFileImageByLightIndex(light, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderFileImageByLightIndex?ALight=' + light,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetReaderFileImageByLightIndexAndPageIndex(light, page, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderFileImageByLightIndexAndPageIndex?ALight=' + light + '&APageIndex=' + page,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetReaderGraphicsBitmapByFieldType(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderGraphicsBitmapByFieldType?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetReaderGraphicsFileImageByFieldType(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderGraphicsFileImageByFieldType?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetRFIDDGRawData(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetRFIDDGRawData?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetRFIDGraphicsBitmapByFieldType(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetRFIDGraphicsBitmapByFieldType?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetRFIDGraphicsFileImageByFieldType(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetRFIDGraphicsFileImageByFieldType?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetSnapshot(light, mode, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetSnapshot?ALight=' + light + '&AMode=' + mode,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetTextFieldByType(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetTextFieldByType?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetTextFieldByTypeAndLCID(type, lcid, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetTextFieldByTypeAndLCID?AType=' + type + '&ALCID=' + lcid,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetTextFieldByTypeAndSource(type, source, originalSource, lcid, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetTextFieldByTypeAndSource?AType=' + type + '&ASourceType='
    + source + '&AOriginalSource=' + originalSource + '&ALCID=' + lcid,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function Hide(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/Hide',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function HideResultPopup(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/HideResultPopup',
    type: '',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function IsReaderResultTypeAvailable(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/IsReaderResultTypeAvailable?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function LED(color, rate, index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/LED?AColor=' + color + '&ABlinkRate=' + rate + '&AIndex=' + index,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function PlaySound(ATimes, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/PlaySound?ATimes=' + ATimes,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function RefreshPACertStore(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/RefreshPACertStore',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function ReportCurrentSampleIssue(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/ReportCurrentSampleIssue',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function RFIDCancelReading(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/RFIDCancelReading',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function SetActiveLights(activeLights, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/SetActiveLights?ALights=' + activeLights,
    type: 'POST',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetActiveLights(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetActiveLights',
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function SaveConfig(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/SaveConfig',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function Show(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/Show',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function WaitAndReadRFID(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/WaitAndReadRFID',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

/*=====/Methods (SPECIAL)=====*/

export function ShutdownComputer(doRestart, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/ShutdownComputer?restart=' + doRestart,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function RestartSdk(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/RestartSdk',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetServiceVersion(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetServiceVersion',
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function GetSystemDateTime(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetSystemDateTime',
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function SetSystemDateTime(value, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Settings/SetSystemDateTime',
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(value),
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function NotifyRfidRequestHandled(successFunction = null) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Events/NotifyRfidRequestHandled',
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

export function NotifyCalibrationHandled(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Events/NotifyCalibrationHandled',
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
      if (successFunction != null) {
        successFunction(data);
      }
    }
  });
}

/*=====EVENTS=====*/

let OnNotificationOpticalCallback;
let OnImageReadyCallback;
let OnNotificationRFIDCallback;
let OnProcessingFinishedCallback;
let OnProcessingStartedCallback;
let OnResultReadyCallback;
let OnResultReadyXMLCallback;
let OnRFIDRequestCallback;
let OnSystemNotificationCallback;

interface RegulaCallbacks {
  OnNotificationOpticalCallback(...args): void;

  OnImageReadyCallback(...args): void;

  OnNotificationRFIDCallback(...args): void;

  OnProcessingFinishedCallback(...args): void;

  OnProcessingStartedCallback(...args): void;

  OnResultReadyCallback(...args): void;

  OnResultReadyXMLCallback(...args): void;

  OnRFIDRequestCallback(...args): void;

  OnSystemNotificationCallback(...args): void;
}

export function initRegulaReader(url, isFallback = false, callbacks: Partial<RegulaCallbacks> = null) {
  if (callbacks) {

    if (callbacks.OnNotificationOpticalCallback) {
      OnNotificationOpticalCallback = callbacks.OnNotificationOpticalCallback;
    }
    if (callbacks.OnImageReadyCallback) {
      OnImageReadyCallback = callbacks.OnImageReadyCallback;
    }
    if (callbacks.OnNotificationRFIDCallback) {
      OnNotificationRFIDCallback = callbacks.OnNotificationRFIDCallback;
    }
    if (callbacks.OnProcessingFinishedCallback) {
      OnProcessingFinishedCallback = callbacks.OnProcessingFinishedCallback;
    }
    if (callbacks.OnProcessingStartedCallback) {
      OnProcessingStartedCallback = callbacks.OnProcessingStartedCallback;
    }
    if (callbacks.OnResultReadyCallback) {
      OnResultReadyCallback = callbacks.OnResultReadyCallback;
    }
    if (callbacks.OnResultReadyXMLCallback) {
      OnResultReadyXMLCallback = callbacks.OnResultReadyXMLCallback;
    }
    if (callbacks.OnRFIDRequestCallback) {
      OnRFIDRequestCallback = callbacks.OnRFIDRequestCallback;
    }
    if (callbacks.OnSystemNotificationCallback) {
      OnSystemNotificationCallback = callbacks.OnSystemNotificationCallback;
    }
  }
  serviceUrl = url;
  let signalRUrl = trimChar(url, '/');

  if (isFallback) {
    signalRUrl += 'notifications';
  }

  jQuery.support.cors = true;

  $.ajax({
    url: signalRUrl + '/signalr/hubs',
    type: 'GET',
    complete: function (xhr, status) {
      if (xhr.status === 200) {
        $.getScript(serviceUrl + '/signalR.min.js', function (data) {
          startConnection(signalRUrl);
        });
      } else {
        if (!isFallback) {
          initRegulaReader(signalRUrl, true, callbacks);
        } else {
          alert('Connection to Regula SDK Service failed!');
        }
      }
    }
  });

  function startConnection(connectionUrl) {
    const connection = $.hubConnection(connectionUrl);
    const hubProxy = connection.createHubProxy('EventsHub');

    hubProxy.on('OnNotificationOptical', function (ACode, AValue) {
      if (OnNotificationOpticalCallback != null) {
        OnNotificationOpticalCallback(ACode, AValue);
      }
    });

    hubProxy.on('OnImageReady', function (ALight, APageIndex) {
      if (OnImageReadyCallback != null) {
        OnImageReadyCallback(ALight, APageIndex);
      }
    });

    hubProxy.on('OnNotificationRFID', function (ACode, AValue) {
      if (OnNotificationRFIDCallback != null) {
        OnNotificationRFIDCallback(ACode, AValue);
      }
    });

    hubProxy.on('OnProcessingFinished', function () {
      if (OnProcessingFinishedCallback != null) {
        OnProcessingFinishedCallback();
      }
    });

    hubProxy.on('OnProcessingStarted', function () {
      if (OnProcessingStartedCallback != null) {
        OnProcessingStartedCallback();
      }
    });

    hubProxy.on('OnResultReady', function (AType) {
      if (OnResultReadyCallback != null) {
        OnResultReadyCallback(AType);
      }
    });

    hubProxy.on('OnResultReadyXML', function (AType, ResultXML) {
      if (OnResultReadyXMLCallback != null) {
        OnResultReadyXMLCallback(AType, ResultXML);
      }
    });

    hubProxy.on('OnRFIDRequest', function (RequestXML) {
      if (OnRFIDRequestCallback != null) {
        OnRFIDRequestCallback(RequestXML);
      }

      NotifyRfidRequestHandled();
    });

    hubProxy.on('OnSystemNotification', function (code, value) {
      if (OnSystemNotificationCallback != null) {
        OnSystemNotificationCallback(code, value);
      }
    });

    connection.start().done(function () {
    }).fail(function (data) {
      alert('Connection to Regula SDK Service failed!');
    });
  }
}

/*=====Utilities=====*/

export function getFromEnum(set, value) {
  for (const k in set) {
    if (set.hasOwnProperty(k)) {
      if (set[k] == value) {
        return k;
      }
    }
  }
  return undefined;
}

export function getDictionary(language) {
  // if (Strings.hasOwnProperty(language)) {
  //   return Strings[language];
  // }
  return {};
}

export function GetTranslation(value) {
  const cookieLang = $.cookie('language');
  const dictionary = getDictionary(cookieLang);
  // if (dictionary == null) {
  //   dictionary = Strings.English;
  // }
  const result = dictionary && dictionary[value];
  if (result != null) {
    return result;
  } else {
    return value;
  }
}

export function setLang(language) {
  let dictionary = getDictionary(language);
  if (dictionary == null) {
    // dictionary = Strings.English;
    language = 'English';
  }

  $('#lang').val(language);
  $.cookie('language', language);
  $('[data-translate]').each(function () {
    if ('value' in this) {
      $(this).val(function () {
        const key = $(this).data('translate');
        if (dictionary && dictionary.hasOwnProperty(key)) {
          return dictionary[key];
        }
      });
    } else {
      $(this).text(function () {
        const key = $(this).data('translate');
        if (dictionary && dictionary.hasOwnProperty(key)) {
          return dictionary[key];
        }
      });
    }

  });
}

export function trimChar(string, charToRemove) {
  while (string.charAt(0) === charToRemove) {
    string = string.substring(1);
  }

  while (string.charAt(string.length - 1) === charToRemove) {
    string = string.substring(0, string.length - 1);
  }

  return string;
}


/* tslint:enable */
