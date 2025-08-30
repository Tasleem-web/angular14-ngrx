import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular14App';
  routingUrls = [
    { key: 'register', value: 'Register' },
    { key: 'login', value: 'Login' },
    // { key: 'counter', value: 'Counter' },
    { key: 'employee', value: 'Employee' },
    { key: 'posts', value: 'Posts' },
  ];
}
