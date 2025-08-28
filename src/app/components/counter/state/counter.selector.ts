import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";


export const getCounterState = createFeatureSelector<CounterState>('counter');


export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter
})

export const getChangeName = createSelector(getCounterState, state => state.changeName)
