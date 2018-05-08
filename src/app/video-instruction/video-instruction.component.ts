import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {PassportFormTranslations} from '../passport-form/passport-form-translations.enum';

@Component({
  selector: 'app-video-instruction',
  templateUrl: './video-instruction.component.html',
  styleUrls: ['./video-instruction.component.scss']
})
export class VideoInstructionComponent implements AfterViewInit {

  @ViewChild('video') video: ElementRef;
  readonly Texts = PassportFormTranslations;

  constructor() {
  }

  ngAfterViewInit() {
    if (this.video && this.video.nativeElement) {
      this.video.nativeElement.webkitEnterFullscreen();
      this.video.nativeElement.play();
    }
  }
}
