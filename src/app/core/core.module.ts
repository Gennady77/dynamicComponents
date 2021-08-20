import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationPopupComponent } from "./component/notification-popup/notification-popup.component";
import { HelloComponent } from "./component/hello/hello.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    NotificationPopupComponent,
    HelloComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NotificationPopupComponent,
    HelloComponent
  ]
})
export class CoreModule { }
