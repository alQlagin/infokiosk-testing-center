import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Languages} from '../models/Languages';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  @Output() select = new EventEmitter();
  readonly Languages = Languages;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(value) {
    this.select.emit(value);
  }
}
