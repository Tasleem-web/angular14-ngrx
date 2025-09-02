import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { AppState } from '../state/app.state';

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

    let isAuth: boolean = false;
    this.store.select(state => state.auth)
      .pipe(take(1))
      .subscribe(authState => {
        console.log("AuthGuard - canLoad - authState:", authState);
        if (authState.user) {
          isAuth = true;
        } else {
          isAuth = false;
          this.router.navigate(['/auth/login']);
        }
      })
    // let isAuth: boolean = false;
    // this.store.select(state => state.auth)
    // .pipe(take(1))
    // .subscribe(authState => {
    //   console.log("AuthGuard - canLoad - authState:", authState);
    //   if (authState.user) {
    //     isAuth = true;
    //   } else {
    //     isAuth = false;
    //     this.router.navigate(['/auth/login']);
    //   }
    // })
    return isAuth;
  }
}
