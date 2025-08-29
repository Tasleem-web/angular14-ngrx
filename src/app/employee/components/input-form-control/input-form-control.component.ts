import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CommonErrorControlComponent } from '../common-error-control/common-error-control.component';

@Component({
  selector: 'app-input-form-control',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CommonErrorControlComponent],
  templateUrl: './input-form-control.component.html',
  styleUrls: ['./input-form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFormControlComponent,
      multi: true,
    }
  ]
})
export class InputFormControlComponent implements ControlValueAccessor {

  @Input() fieldName: string = '';
  @Input() label: string = '';
  @Input() parentFormGroup!: FormGroup;

  public value: string = '';

  public changed!: (value: string) => void;

  public touched!: () => void;

  public isDisabled: boolean = false;

  get formField(): FormControl {
    return this.parentFormGroup.get(this.fieldName) as FormControl;
  }

  constructor() { }


  onChange(event: Event) {
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
