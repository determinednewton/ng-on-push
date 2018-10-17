import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CdComponent } from './cd/cd.component';
import { Observable, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-on-push';

  number: Observable<number>;

  @ViewChild(CdComponent) cdComponent;

  constructor() {
    this.number = timer(0, 1000)
      .pipe(
        takeWhile((n) => (n < 100))
      );
  }

  ngAfterViewInit() {
  }
}
