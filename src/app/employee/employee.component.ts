import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomSelectDropdownComponent } from './components/custom-select-dropdown/custom-select-dropdown.component';
import { InputFormControlComponent } from './components/input-form-control/input-form-control.component';
import { CustomRadioButtonComponent } from './components/custom-radio-button/custom-radio-button.component';
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';
import { Store } from '@ngrx/store';
import { register } from './state/employee.actions';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AppState } from './state/employee.state';

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
    CustomCheckboxComponent,
    EmployeeListComponent
  ],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeForm!: FormGroup;

  genderOptions = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
    { name: 'Other', value: 'other' },
  ];

  stateOptions = [
    { name: 'Maharastra', value: 'maharastra', id: 1 },
    { name: 'Karnataka', value: 'karnataka', id: 2 },
    { name: 'Delhi', value: 'delhi', id: 3 },
    { name: 'Hydrabad', value: 'hydrabad', id: 4 },
  ]

  languageOptions = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Spanish' },
    { id: 3, name: 'French' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ employee: AppState['employeeDetails'] }>
  ) { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName: new FormControl('test', Validators.required),
      email: new FormControl('test@mail.com', [Validators.required, Validators.email]),
      password: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
      selectGender: new FormControl(this.genderOptions[0].name),
      state: new FormControl(this.stateOptions[0].name),
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
      this.store.dispatch(register(this.employeeForm.value));
      // Send data to backend
    } else {
      // Mark all fields as touched to display validation messages
      this.employeeForm.markAllAsTouched();
    }
  }

}
