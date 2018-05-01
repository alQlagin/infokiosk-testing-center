import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegulaFields} from '../regula/regula.fields';
import {filter, throttleTime} from 'rxjs/operators';
import {Regula} from '../regula/regula.service';
import {Subscription} from 'rxjs/Subscription';
import {Languages} from '../models/Languages';
import {PassportFormTranslations} from './passport-form-translations.enum';

@Component({
  selector: 'app-passport-form',
  templateUrl: './passport-form.component.html',
  styleUrls: ['./passport-form.component.scss']
})
export class PassportFormComponent implements OnInit, OnDestroy {
  @Input() language: Languages = Languages.RU;
  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();
  passportForm: FormGroup = this.fb.group({
    passport_series: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    date_of_birth: ['', Validators.required]
  });
  readonly Texts = PassportFormTranslations;
  private sub: Subscription;

  constructor(private readonly fb: FormBuilder, private regula: Regula) {

  }

  ngOnInit() {
    this.sub = this.regula.connect()
      .pipe(
        throttleTime(2000),
        filter(passport => !!passport)
      )
      .subscribe((passport) => {
        passport.forEach(({field, value}) => {
          switch (field) {
            case RegulaFields.DateofBirth:
              this.passportForm.patchValue({date_of_birth: value.split('.').reverse().join('-')});
              break;
            case RegulaFields.DocumentNumber:
              this.passportForm.patchValue({passport_series: value});
              break;
            case RegulaFields.GivenNames:
              this.passportForm.patchValue({first_name: value});
              break;
            case RegulaFields.Surname:
              this.passportForm.patchValue({last_name: value});
              break;
            default:
              return null;
          }
        });
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit() {
    this.submit.emit(this.passportForm.getRawValue());
  }

  onCancel() {
    this.cancel.emit();
  }

}
