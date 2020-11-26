import { Model } from './../../models/model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-system',
  templateUrl: './reservation-system.component.html',
  styleUrls: ['./reservation-system.component.css']
})
export class ReservationSystemComponent implements OnInit {

  @Input() public bgColor = 'red';

  constructor() {
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--bg-color', this.bgColor);
  }

  onButtonClick() {
    const lEventArgs = new Model();
    lEventArgs.Name = 'Test';

    window.dispatchEvent(new CustomEvent('button-pressed',
    {
      detail: lEventArgs
    }));
  }
}
