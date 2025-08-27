import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonErrorComponent } from '../common-error/common-error.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-field-control',
  standalone: true,
  imports: [CommonErrorComponent, CommonModule],
  templateUrl: './common-field-control.component.html',
  styleUrls: ['./common-field-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => CommonFieldControlComponent
      ),
      multi: true
    }
  ]
})
export class CommonFieldControlComponent implements ControlValueAccessor {

  @Input() fieldName!: string;
  @Input() label!: string;
  @Input() parentForm!: FormGroup;

  public value!: string;

  changed!: (value: string) => void;

  touched!: () => void;

  isDisabled!: boolean;

  get formField(): FormControl {
    return this.parentForm.get(this.fieldName) as FormControl;
  }

  public onChange(event: Event) {

    const value: string = (<HTMLInputElement>event.target).value;

    this.changed(value);

  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
