import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperContentDirective } from './directive/helper-content.directive';

@NgModule({
  declarations: [
    HelperContentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [HelperContentDirective]
})
export class SharedModule { }
