import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {Regula} from './regula/regula.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JSONRPCResponseInterceptor} from './intereptors/jsonrpc-response.interceptor';
import { PassportFormComponent } from './passport-form/passport-form.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { TranslatePipe } from './translate.pipe';
import { ViewResultComponent } from './view-result/view-result.component';
import {ApiClientService} from './api-client.service';
import {VideoInstructionComponent} from './video-instruction/video-instruction.component';
import {RegulaMock} from './regula/regula-mock.service';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    PassportFormComponent,
    LanguageSelectorComponent,
    TranslatePipe,
    ViewResultComponent,
    VideoInstructionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: Regula, useClass: environment.production ? Regula : RegulaMock},
    ApiClientService,
    {provide: HTTP_INTERCEPTORS, useClass: JSONRPCResponseInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
