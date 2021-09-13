import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { MyFormGroupDirective } from './person/directives/my-form-group.directive';
import { MyInputComponent } from './person/components/my-input/my-input.component';
import { MyFormControlDirective } from './person/directives/my-form-control.directive';



@NgModule({
  declarations: [
    PersonComponent,
    MyFormGroupDirective,
    MyInputComponent,
    MyFormControlDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DatabaseModule { }
