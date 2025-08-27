import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BooksService } from "../books.service";
import { booksFetchAPISuccess, invokeBookAPI } from "./books.action";
import { map, switchMap } from "rxjs";

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) { }

  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeBookAPI),
      switchMap(() => {
        return this.booksService.get()
          .pipe(
            map((data) => booksFetchAPISuccess({ allBooks: data }))
          )
      })
    )
  )

}
