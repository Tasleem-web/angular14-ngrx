import { createAction, props } from "@ngrx/store";
import { EmployeeState, EmployeeDetails } from "./employee.state";


export const register = createAction(
  '[Employee] Register Employee',
  props<{ employee: EmployeeDetails }>()
)
