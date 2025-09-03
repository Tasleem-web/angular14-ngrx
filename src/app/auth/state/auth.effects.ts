import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { autoLogin, loginStart, loginSuccess, logOut, registerStart, registerSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, merge, mergeMap, of, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { setErrorMessage, setLoadingState } from "src/app/state/shared.actions";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
  ) { }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap(action => {
        return this.authService.login(action.email, action.password)
          .pipe(
            map(data => {
              this.store.dispatch(setLoadingState({ status: false }));
              this.store.dispatch(setErrorMessage({ message: '' }));
              const user = this.authService.formatUser(data);
              this.authService.setUserInLocalStorage(user);
              return loginSuccess({ user, redirect: true });
            }),
            catchError(err => {
              const message = this.authService.getErrorMessage(err.error.error.message);
              this.store.dispatch(setLoadingState({ status: false }));
              return of(setErrorMessage({ message }));
            })
          )
      })
    )
  })


  homeRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...[loginSuccess, registerSuccess]),
      tap(action => {
        if (action.redirect) this.router.navigate(['/'])
      })
    )
  }, { dispatch: false });


  logOutRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logOut),
      tap(() => {
        this.router.navigate(['/auth/login'])
      })
    )
  }, { dispatch: false });


  register$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(registerStart),
      exhaustMap(action => {
        return this.authService.register(action.email, action.password)
          .pipe(
            map(data => {
              this.store.dispatch(setLoadingState({ status: false }));
              this.store.dispatch(setErrorMessage({ message: '' }));
              const user = this.authService.formatUser(data);
              this.authService.setUserInLocalStorage(user);
              return registerSuccess({ user, redirect: true });
            }),
            catchError(err => {
              const message = this.authService.getErrorMessage(err.error.error.message);
              this.store.dispatch(setLoadingState({ status: false }));
              return of(setErrorMessage({ message }));
            })
          )
      })
    )
  })

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogin),
      mergeMap((action: any) => {
        const user = this.authService.getUserFromLocalStorage();
        if (user) return of(loginSuccess({ user, redirect: false }))
        return of(logOut())
      })
    )
  })


  logOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logOut),
      tap(() => {
        this.authService.removeUserFromLocalStorage();
        this.router.navigate(['auth'])
      })
    )
  }, { dispatch: false });

}
