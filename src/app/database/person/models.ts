import { EventEmitter } from "@angular/core";
import { Observable, Subject } from "rxjs";

export abstract class MyAbstractControl {
  public readonly value: any;

  abstract setValue(value: any, options?: Object): void;
}

export class MyFormGroup extends MyAbstractControl {
  constructor(
    public controls: {[key: string]: MyAbstractControl}
  ) {
    super();
  }

  setValue(value: any) {}
}

export class MyFormControl extends MyAbstractControl {
  valueChanges: EventEmitter<any>;

  private onChange: Function = () => {};

  constructor(
    formState: any = null,
  ) {
    super();

    this.valueChanges = new EventEmitter();
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  setValue(value: any) {
    (this as {value: any}).value = value;

    this.onChange(value);

    this.updateValueAndValidity();
  }

  updateValueAndValidity(opts: {emitEvent?: boolean} = {}) {
    if(opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
    }
  }
}
