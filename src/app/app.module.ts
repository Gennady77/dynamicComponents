import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationPopupComponent } from './core/component/notification-popup/notification-popup.component';
import { HelloComponent } from './core/component/hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationPopupComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
