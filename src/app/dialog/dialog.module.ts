import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [
    DialogContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class DialogModule { }
