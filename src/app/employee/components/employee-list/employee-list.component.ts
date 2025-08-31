import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeState } from '../../state/employee.state';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getEmployee } from '../../state/employee.selector';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeData!: EmployeeState['employeeDetails'];
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.getEmployeeDetails();

  }

  getEmployeeDetails() {
    this.store.select(getEmployee).subscribe((data: any) => {
      this.employeeData = data.employeeDetails;
    });
  }

}
