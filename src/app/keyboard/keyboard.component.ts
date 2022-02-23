import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KeyboardComponent),
      multi: true,
    },
  ],
})
export class KeyboardComponent implements OnInit, ControlValueAccessor {
  onChange: (input: string) => {};

  constructor() {}

  ngOnInit() {}

  writeValue() {}

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched() {}
}
