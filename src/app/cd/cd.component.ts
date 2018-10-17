import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdComponent {
  @Input() number = -1;

  log() {
    console.log('clicked me!');
  }
}
