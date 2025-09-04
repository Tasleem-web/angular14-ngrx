import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { AppState } from '../state/app.state';
import { isAuthenticated } from '../auth/state/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.store.select(isAuthenticated).pipe(
      take(1),
      map(authenticated => {
        if (!authenticated) {
          return this.router.createUrlTree(['/auth']);
        }
        return true;
      })
    );
  }
}
