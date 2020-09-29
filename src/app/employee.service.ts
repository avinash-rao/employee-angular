import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class Employee{
  constructor(
    public id: number,
    public name: string,
    public email: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getEmployees() {
    return this.http.get<Employee[]>('http://localhost:8080/employees');
  }

  public deleteEmployee(employee: Employee) {
    return this.http.delete<Employee>('http://localhost:8080/employees/' + employee.id);
  }
}
