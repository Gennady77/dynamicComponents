import { AfterViewInit, Component, ElementRef, forwardRef, OnInit, ViewChild } from '@angular/core';
import { MY_NG_VALUE_ACCESSOR, MyControlValueAccessor } from "../../control_value_accessor";

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss'],
  providers: [{
    provide: MY_NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MyInputComponent),
    multi: true
  }]
})
export class MyInputComponent implements OnInit, AfterViewInit, MyControlValueAccessor {
  @ViewChild('inputControl') input!: ElementRef;

  private onChange = () => {};
  private _fn!: Function;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.input.nativeElement.addEventListener('input', () => {
      this.onChange();
    })
  }

  registerOnChange(fn: any) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.input.nativeElement.value);
    }
  }

  writeValue(value: any) {
    this.input.nativeElement.value = value;
  }
}
