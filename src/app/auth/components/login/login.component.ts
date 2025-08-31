import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { loginStart } from '../../state/auth.actions';
import { setLoadingState } from 'src/app/state/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.formCreation();
  }

  formCreation() {
    this.loginForm = this.formBuilder.group({
      email: ['test@test.com', [Validators.required]],
      password: ['123456', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    })
  }

  onLoginSubmit() {
    const { email, password } = this.loginForm.value;
    this.store.dispatch(loginStart({ email, password }));
    this.store.dispatch(setLoadingState({ status: true }));
  }

}
