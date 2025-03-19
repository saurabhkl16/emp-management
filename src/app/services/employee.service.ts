import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, MyApiResponse } from '../models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public createNewEmployee(obj: Employee) {
    return this.http.post(
      'https://projectapi.gerasim.in/api/EmployeeManagement/CreateEmployee',
      obj
    );
  }

  public getEmployees() {
    return this.http.get(
      'https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees'
    );
  }

  public delEmployee(empId: number) {
    return this.http.delete(
      'https://projectapi.gerasim.in/api/EmployeeManagement/DeleteEmployee/' +
        empId
    );
  }

  public updateEmployeeDetails(obj: any) {
    return this.http.put(
      'https://projectapi.gerasim.in/api/EmployeeManagement/UpdateEmployee/' +
        obj.employeeId,
      obj
    );
  }
}
