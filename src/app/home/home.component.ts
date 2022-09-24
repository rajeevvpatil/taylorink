import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navSelected = new BehaviorSubject<number>(0);
  $navSelected = this.navSelected.asObservable();
  constructor() { }

  ngOnInit(): void {;
  }

  public tabChange(navIndex: number) {
    this.navSelected.next(navIndex)
  }
}
