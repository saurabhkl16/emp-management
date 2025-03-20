import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, MyApiResponse, Project } from '../models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://projectapi.gerasim.in/api/EmployeeManagement/';
  constructor(private http: HttpClient) {}

  public createNewEmployee(obj: Employee) {
    return this.http.post(this.apiUrl + 'CreateEmployee', obj);
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl + 'GetAllEmployees');
  }

  public delEmployee(empId: number) {
    return this.http.delete(this.apiUrl + 'DeleteEmployee/' + empId);
  }
  
  public updateEmployeeDetails(obj: any) {
    return this.http.put(this.apiUrl + 'UpdateEmployee/' + obj.employeeId, obj);
  }
  
  public createProject(obj: Project) {
    return this.http.post<Project>(this.apiUrl + 'CreateProject', obj);
  }
  
  public getProjects() {
    return this.http.get<Project[]>(this.apiUrl + 'GetAllProjects');
  }
  
  public updateProjects(obj: Project) {
    return this.http.put<Project>(
      this.apiUrl + '/UpdateProject/' + obj.projectId,
      obj
    );
  }
  
  public delProject(empId: number) {
    return this.http.delete(this.apiUrl + 'DeleteProject/' + empId);
  }
  
}
