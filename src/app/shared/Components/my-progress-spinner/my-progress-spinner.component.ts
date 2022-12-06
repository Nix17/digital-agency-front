import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-progress-spinner',
  templateUrl: './my-progress-spinner.component.html',
  styleUrls: ['./my-progress-spinner.component.scss']
})
export class MyProgressSpinnerComponent implements OnInit {

  @Input() sizePx: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
