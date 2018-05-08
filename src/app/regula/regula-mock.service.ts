import {Injectable} from '@angular/core';
import {RegulaConnector} from './regula-connector';
import {Observable} from 'rxjs/Observable';
import {RegulaFields} from './regula.fields';
import {interval} from 'rxjs/observable/interval';
import {map} from 'rxjs/operators';
import {date, helpers, name} from 'faker';

@Injectable()
export class RegulaMock implements RegulaConnector {

  constructor() {
  }

  connect(): Observable<Array<{ field: RegulaFields; value: string }>> {

    return interval(10000)
      .pipe(
        map(() => {
          return [
            {field: RegulaFields.GivenNames, value: name.firstName()},
            {field: RegulaFields.Surname, value: name.lastName()},
            {field: RegulaFields.DocumentNumber, value: helpers.replaceSymbolWithNumber('AA#######', '#')},
            {field: RegulaFields.DateofBirth, value: date.recent(10).toString()},

          ];
        })
      );
  }

  reset(): void {
  }

  restartSdk(): void {
  }

}
