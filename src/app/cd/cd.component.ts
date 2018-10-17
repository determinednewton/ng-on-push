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

  constructor() {
    timer(0, 1000)
      .pipe(
        takeWhile((n) => (n < 100))
      ).subscribe((n) => {
        this.number = n;
    });
  }

  log() {
    console.log('clicked me!');
  }
}
