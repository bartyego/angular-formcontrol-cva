import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() {}

  writeValue() {}

  registerOnChange() {}

  registerOnTouched() {}

}