import { createAction, props } from "@ngrx/store";
import { AppState, EmployeeDetails } from "./employee.state";


export const register = createAction(
  '[Employee] Register Employee',
  props<{ employee: EmployeeDetails }>()
)
