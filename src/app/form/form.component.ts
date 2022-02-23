import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model = new FormGroup({
    a: new FormControl(''),
    b: new FormControl(''),
    c: new FormControl(''),
  });
  currentControl: FormControl = <FormControl>this.model.get('a');

  constructor() { }

  ngOnInit() {}

}