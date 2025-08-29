import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-radio-button.component.html',
  styleUrls: ['./custom-radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomRadioButtonComponent,
      multi: true
    }
  ]
})
export class CustomRadioButtonComponent implements ControlValueAccessor {

  @Input() options: any[] = [];
  @Input() bindLabel!: string;
  @Input() bindValue!: string;

  private value!: string;
  private onChange!: (value: any) => void;
  private onTouched!: () => void;

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  selectOption(option: any): void {
    this.value = option[this.bindValue];
    this.onChange(this.value);
    this.onTouched();
  }

  isSelected(option: any): boolean {
    return this.value === option[this.bindValue];
  }

}
