export interface EmployeeDetails {
  email: string,
  fullName: string,
  password: string,
  selectGender: string,
  state: number
}

export interface EmployeeState {
  employeeDetails: EmployeeDetails[];
}

export const initialState: EmployeeState = {
  employeeDetails: []
}
