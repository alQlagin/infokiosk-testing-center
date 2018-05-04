import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegulaFields} from '../regula/regula.fields';
import {Languages} from '../models/Languages';
import {PassportFormTranslations} from './passport-form-translations.enum';
import {throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-passport-form',
  templateUrl: './passport-form.component.html',
  styleUrls: ['./passport-form.component.scss']
})
export class PassportFormComponent implements OnChanges {
  @Input() language: Languages = Languages.RU;
  @Input() data: [{ field: RegulaFields, value: string }] = null;
  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();
  passportForm: FormGroup = this.fb.group({
    passport_series: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    date_of_birth: ['', Validators.required]
  });
  readonly Texts = PassportFormTranslations;

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnChanges(changes) {
    if (changes.data && changes.data.currentValue) {
      this.data.forEach(({field, value}) => {
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
    }
  }

  onSubmit() {
    this.submit.emit(this.passportForm.getRawValue());
  }

  onCancel() {
    this.cancel.emit();
  }

}
