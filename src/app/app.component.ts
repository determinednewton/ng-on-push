import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CdComponent } from './cd/cd.component';
import { Observable, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-on-push';

  parentNumber: Observable<number>;

  constructor() {
    this.parentNumber = timer(0, 1000)
      .pipe(
        takeWhile((n) => (n < 100)));
  }

}
