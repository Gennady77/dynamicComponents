import { Directive, ElementRef, Inject, Input, OnChanges, Optional, Self, SimpleChanges } from '@angular/core';
import { MyFormControl } from "../models";
import { MY_NG_VALUE_ACCESSOR, MyControlValueAccessor } from "../control_value_accessor";
import { MyNgControl } from "../ng-control";

@Directive({
  selector: '[appMyFormControl]'
})
export class MyFormControlDirective extends MyNgControl implements OnChanges {
  @Input('appMyFormControl') form!: MyFormControl;

  constructor(
    @Optional() @Self() @Inject(MY_NG_VALUE_ACCESSOR) private valueAccessors: MyControlValueAccessor[]
  ) {
    super();

    this.valueAccessor = valueAccessors[0];
  }

  ngOnChanges(changes: SimpleChanges) {
    const control = this.form;
    const dir = this;

    dir.valueAccessor!.registerOnChange((newValue: any) => {
      control.setValue(newValue);
    });

    const onChange = (newValue: any) => {
      dir.valueAccessor!.writeValue(newValue);
    }

    control.registerOnChange(onChange);
  }
}
