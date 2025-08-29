import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from '../../state/employee.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeData!: AppState['employeeDetails'];
  constructor(
    private store: Store<{ employee: AppState['employeeDetails'] }>
  ) { }

  ngOnInit(): void {
    this.getEmployeeDetails();

  }

  getEmployeeDetails() {
    this.store.select('employee').subscribe((data: any) => {
      this.employeeData = data.employeeDetails;
    });
  }

}
