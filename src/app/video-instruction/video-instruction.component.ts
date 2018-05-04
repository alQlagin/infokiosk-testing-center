import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video-instruction',
  templateUrl: './video-instruction.component.html',
  styleUrls: ['./video-instruction.component.scss']
})
export class VideoInstructionComponent implements AfterViewInit {

  @ViewChild('video') video: ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    this.video.nativeElement.webkitEnterFullscreen();
    this.video.nativeElement.play();
  }
}
