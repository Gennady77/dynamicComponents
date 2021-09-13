import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DialogModule } from "./dialog/dialog.module";
import { CoreModule } from "./core/core.module";
import { DatabaseModule } from "./database/database.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DialogModule,
    DatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
