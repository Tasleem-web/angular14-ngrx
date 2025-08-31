import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess, logOut } from "./auth.actions";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
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
              return loginSuccess({ user });
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


  loginRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginSuccess),
      tap(action => {
        this.router.navigate(['/'])
      })
    )
  }, { dispatch: false });

  logOutRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logOut),
      tap(() => {
        debugger
        this.router.navigate(['/auth/login'])
      })
    )
  }, { dispatch: false });

}
