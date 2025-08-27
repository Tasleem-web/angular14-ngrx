import { createAction, props } from "@ngrx/store";
import { Book } from "./book";

export const invokeBookAPI = createAction(
  "[Books API] invoke Book Fetch API"
);


export const booksFetchAPISuccess = createAction(
  "[Books API] books fetch api success",
  props<{ allBooks: Book[] }>()
);
