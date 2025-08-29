import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomSelectDropdownComponent } from './components/custom-select-dropdown/custom-select-dropdown.component';
import { InputFormControlComponent } from './components/input-form-control/input-form-control.component';
import { CustomRadioButtonComponent } from './components/custom-radio-button/custom-radio-button.component';
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputFormControlComponent,
    CustomRadioButtonComponent,
    CustomSelectDropdownComponent,
    CustomCheckboxComponent
  ],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeForm!: FormGroup;

  colorOptions = [
    { name: 'Red', value: 'red' },
    { name: 'Blue', value: 'blue' },
    { name: 'Green', value: 'green' },
  ];

  stateOptions = [
    { name: 'Maharastra', value: 'maharastra' },
    { name: 'Karnataka', value: 'karnataka' },
    { name: 'Delhi', value: 'delhi' },
    { name: 'Hydrabad', value: 'hydrabad' },
  ]

  languageOptions = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Spanish' },
    { id: 3, name: 'French' },
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName: new FormControl('test', Validators.required),
      email: new FormControl('test@mail.com', [Validators.required, Validators.email]),
      password: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
      favoriteColor: new FormControl(this.colorOptions[0].value),
      state: new FormControl(this.stateOptions[0].value),
      selectedLanguages: this.buildLanguages()
    });
  }

  // Creates a FormArray with a FormControl for each language
  buildLanguages() {
    const arr = this.languageOptions.map(language => {
      return this.formBuilder.control(false); // Initially unchecked
    });
    return this.formBuilder.array(arr);
  }

  get selectedLanguagesArray() {
    return this.employeeForm.get('selectedLanguages') as FormArray;
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Form Submitted!', this.employeeForm.value);
      // Send data to backend
    } else {
      console.log('Form is invalid.');
      // Mark all fields as touched to display validation messages
      this.employeeForm.markAllAsTouched();
    }
  }

}
