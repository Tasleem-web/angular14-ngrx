import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonFieldControlComponent } from '../common-field-control/common-field-control.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, CommonFieldControlComponent],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formCreation();
  }

  formCreation() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
    })
  }

  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Handle form submission here
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        control?.markAsTouched();
      });
    }
  }

}
