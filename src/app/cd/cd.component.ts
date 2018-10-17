import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdComponent {
  @Input() number = -1;

  constructor() {
  }

  log() {
    console.log('clicked me!');
  }
}
