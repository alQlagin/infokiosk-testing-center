import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PassportFormTranslations} from '../passport-form/passport-form-translations.enum';
import {Languages} from '../models/Languages';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent implements OnInit {
  @Input() language: Languages = Languages.RU;
  @Input() passport: any;
  @Output() cancel = new EventEmitter();
  readonly Texts = PassportFormTranslations;

  constructor() {
  }

  ngOnInit() {
  }

  onClose() {
    this.cancel.emit();
  }
}
