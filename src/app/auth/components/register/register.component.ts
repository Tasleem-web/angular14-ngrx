import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { registerStart } from '../../state/auth.actions';
import { setLoadingState } from 'src/app/state/shared.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.formCreation();
  }

  formCreation() {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.store.dispatch(setLoadingState({ status: true }));
      this.store.dispatch(registerStart({ email, password }));
    }
  }

}
