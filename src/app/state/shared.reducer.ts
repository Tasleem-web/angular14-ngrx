import { createReducer, on } from "@ngrx/store";
import { initialSharedState, SharedState } from "./shared.state";
import { setErrorMessage, setLoadingState } from "./shared.actions";


const _sharedReducer = createReducer(
  initialSharedState,
  on(setLoadingState, (state, action) => {
    return {
      ...state,
      loading: action.status
    }
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      error: action.message
    }
  })
);

export function sharedReducer(state: SharedState | undefined, action: any) {
  return _sharedReducer(state, action);
}
