import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { MyAbstractControl, MyFormGroup } from "../models";

@Directive({
  selector: '[appMyFormGroup]',
  host: {'(submit)': 'onSubmit($event)'}
})
export class MyFormGroupDirective{
  @Input('appMyFormGroup') form: MyFormGroup = null!;

  @Output() ngSubmit = new EventEmitter();

  constructor() {
  }

  onSubmit($event: Event) {
    this.ngSubmit.emit($event);
    return false;
  }
}
