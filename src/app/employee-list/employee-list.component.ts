import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  displayedColumns: string[] = ['name', 'email','action'];
  dataSource;

  constructor(private employeeService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      this.dataSource = (data);
    });
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee).subscribe(
      () => this.fetchEmployees());
  }
  
}
