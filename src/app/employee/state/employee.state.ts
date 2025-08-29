export interface EmployeeDetails {
  email: string,
  fullName: string,
  password: string,
  selectGender: string,
  state: number
}

export interface AppState {
  employeeDetails: EmployeeDetails[];
}

export const initialState: AppState = {
  employeeDetails: []
}
