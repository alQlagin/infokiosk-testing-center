import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {pluck} from 'rxjs/operators';

@Injectable()
export class ApiClientService {

  constructor(private readonly http: HttpClient) {
  }

  createVisit(passport) {
    return this.http.post(`${environment.apiUrl}/visit/passport`, passport)
      .pipe(
        pluck('object')
      );
  }
}
