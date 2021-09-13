import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { MyFormControl, MyFormGroup } from "./models";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  // formGroup = new MyFormGroup({
  //   name: new MyFormControl('')
  // });

  name = new MyFormControl('');

  constructor() {

    /**** 1 test. It should emit new values ****/
    this.name.valueChanges.subscribe((value) => {
      console.log('----------- valueChanges', value);
    });
  }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.name.setValue('inserted value');
  }
}
