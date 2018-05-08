import {Observable} from 'rxjs/Observable';
import {RegulaFields} from './regula.fields';

export interface RegulaConnector {
  connect(): Observable<Array<{ field: RegulaFields, value: string }>>;

  restartSdk(): void;

  reset(): void;
}
