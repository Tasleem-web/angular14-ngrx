import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-select-dropdown.component.html',
  styleUrls: ['./custom-select-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomSelectDropdownComponent,
      multi: true
    }
  ]
})
export class CustomSelectDropdownComponent implements ControlValueAccessor {

  @Input() stateOptions: any[] = []
  @Input() bindValue: string = '';
  @Input() bindLabel: string = '';

  public value: any;
  public changed!: (value: any) => void;
  public touched!: () => void;
  public isDisabled: boolean = false;

  constructor() { }


  public onChanged(event: Event) {
    const value: string = event && (<HTMLSelectElement>event.target).value;
    this.changed(value);
  }

  writeValue(obj: any): void {
    this.value = obj;
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

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.touched();
    this.changed(this.value)
  }

}
