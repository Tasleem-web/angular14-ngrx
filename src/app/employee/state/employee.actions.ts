import { createAction, props } from "@ngrx/store";
import { ModuleState, EmployeeDetails } from "./employee.state";


export const register = createAction(
  '[Employee] Register Employee',
  props<{ employee: EmployeeDetails }>()
)
