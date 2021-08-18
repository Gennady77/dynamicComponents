import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationPopupComponent } from './core/component/notification-popup/notification-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationPopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
