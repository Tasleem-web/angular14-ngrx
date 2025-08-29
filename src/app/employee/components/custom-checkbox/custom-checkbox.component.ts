import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent implements ControlValueAccessor {

  @Input() bindLabel: string = '';
  @Input() bindValue: string = '';
  @Input() options: any[] = [];

  selectedValues: number[] = [];
  isDisabled = false;

  onChange: (value: number[]) => void = () => { };
  onTouched: () => void = () => { };

  writeValue(value: number[]): void {
    this.selectedValues = value || [];
  }

  registerOnChange(fn: (value: number[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  // Handle the change event and safely access the checkbox's state
  onCheckboxChange(event: Event, optionId: number): void {
    this.onTouched();
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.selectedValues.push(optionId);
    } else {
      this.selectedValues = this.selectedValues.filter(id => id !== optionId);
    }
    this.onChange(this.selectedValues);
  }



  // Helper method to check if a checkbox should be checked
  isChecked(optionId: number): boolean {
    return this.selectedValues.includes(optionId);
  }


}
