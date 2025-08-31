import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeState } from "./employee.state";


export const EMPLOYEE_FEATURE_KEY = 'employee';


const getEmployeeState = createFeatureSelector<EmployeeState>(EMPLOYEE_FEATURE_KEY);

export const getEmployee = createSelector(getEmployeeState, (state) => state.employeeDetails);
