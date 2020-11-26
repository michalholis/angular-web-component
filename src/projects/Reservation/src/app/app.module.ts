import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { createCustomElement } from '@angular/elements';
import { ReservationSystemComponent } from './reservation-system/reservation-system.component';

@NgModule({
  declarations: [
    ReservationSystemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [ReservationSystemComponent],
})

export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(ReservationSystemComponent, { injector });
    customElements.define('ui-reservation', webComponent);
  }

  ngDoBootstrap() { }
}
