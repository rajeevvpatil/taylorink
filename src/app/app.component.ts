import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taylor-ink';

  navSelected = new BehaviorSubject<number>(0);
  $navSelected = this.navSelected.asObservable();
  constructor() { }

  public tabChange(navIndex: number) {
    this.navSelected.next(navIndex)
  }
}
