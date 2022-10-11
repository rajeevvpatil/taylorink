import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss'],
})
export class SpotlightComponent implements OnInit {
  public fileName: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.fileName = data.fileName;
  }

  ngOnInit(): void {}
}
