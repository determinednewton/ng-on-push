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
  @Input() number: Observable<number>;

  constructor(changeDetectorRef: ChangeDetectorRef) {
    this.number = timer(0, 1000)
      .pipe(
        takeWhile((n) => (n < 100))
      );
  }

  log() {
    console.log('clicked me!');
  }
}
