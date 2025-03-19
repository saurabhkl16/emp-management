import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyApiResponse } from '../models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  public getParentDept() {
    return this.http.get<MyApiResponse>(
      'https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment'
    );
  }

  public getChildDeptUsingParentId(id: number): Observable<MyApiResponse> {
    return this.http.get<MyApiResponse>(
      'https://projectapi.gerasim.in/api/Complaint/GetChildDepartmentByParentId?deptId=' +
        id
    );
  }
}
