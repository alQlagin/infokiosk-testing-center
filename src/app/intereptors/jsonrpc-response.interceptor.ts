import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {JSONRPCResponse} from '../models/JSONRPCResponse';

export class JSONRPCResponseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        map((event) => event instanceof HttpResponse ? this.handleResponse(event) : event)
      );
  }

  private handleResponse(r: HttpResponse<JSONRPCResponse<any>>) {
    if (r.body.code === 200) {
      return r.clone({
        status: r.body.code,
        body: r.body.object
      });
    } else {
      throw new HttpErrorResponse({
        status: r.body.code,
        error: r.body.error,
        headers: r.headers,
        url: r.url,
        statusText: r.body.error.message
      });
    }
  }
}
