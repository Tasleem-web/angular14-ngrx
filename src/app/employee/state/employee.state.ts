export interface EmployeeDetails {
  email: string,
  fullName: string,
  password: string,
  selectGender: string,
  state: number
}

export interface ModuleState {
  employeeDetails: EmployeeDetails[];
}

export const initialState: ModuleState = {
  employeeDetails: []
}
