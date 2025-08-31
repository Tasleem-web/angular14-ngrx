import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isAuthenticated } from '../auth/state/auth.selector';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { logOut } from '../auth/state/auth.actions';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isAuthenticated!: Observable<boolean>;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
  }

  routingUrls = [
    // { key: 'register', value: 'Register' },
    // { key: 'login', value: 'Login' },
    // { key: 'counter', value: 'Counter' },
    { key: 'employee', value: 'Employee' },
    { key: 'posts', value: 'Posts' },
    // { key: 'auth', value: 'Auth' },
  ];

  logout() {
    this.store.dispatch(logOut());
  }

}
