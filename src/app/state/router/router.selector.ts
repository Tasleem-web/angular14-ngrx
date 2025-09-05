import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

export const ROUTER_STATE_NAME = 'router';

export const getRouterState = createFeatureSelector<RouterReducerState>(ROUTER_STATE_NAME);;

export const getCurrentRoute = createSelector(getRouterState, router => router.state);
