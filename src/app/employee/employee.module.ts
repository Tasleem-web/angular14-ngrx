import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './state/employee.reducer';
import { EMPLOYEE_FEATURE_KEY } from './state/employee.selector';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    StoreModule.forFeature(EMPLOYEE_FEATURE_KEY, employeeReducer),
  ]
})
export class EmployeeModule { }
