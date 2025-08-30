import { createReducer, on } from "@ngrx/store";
import { EmployeeState, initialState } from "./employee.state";
import { register } from "./employee.actions";


const _employeeReducer = createReducer(
  initialState,
  on(register, (state: any, action: any) => {
    return {
      ...state,
      employeeDetails: [
        ...state.employeeDetails,
        action
      ],
    }
  })
)

export function employeeReducer(state: EmployeeState | undefined, action: any) {
  return _employeeReducer(state, action)
}
