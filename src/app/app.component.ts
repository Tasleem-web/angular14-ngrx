import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { getErrorMessage, isLoading } from './state/shared.selector';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [LoadingSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular14App';

  showLoading!: Observable<boolean>;
  errorMessage!: Observable<string | null>;

  constructor(
    private store: Store<AppState>
  ) { }


  ngOnInit(): void {
    this.showLoading = this.store.select(isLoading);
    if (this.store.select(getErrorMessage)) {
      this.errorMessage = this.store.select(getErrorMessage);
    }
  }


}
