import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Employee, IParentDept, MyApiResponse } from '../../models/Employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { error } from 'console';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  standalone: true,
})
export class EmployeeComponent implements OnInit {
  public parentDeptList: IParentDept[] = [];
  public childDeptList: IParentDept[] = [];
  public deptId = 0;
  public showEmployeeForm = signal<boolean>(false);

  public employeeObj: Employee = new Employee();

  public masterService = inject(MasterService);
  public employeeService = inject(EmployeeService);
  public employeeList: any;

  ngOnInit(): void {
    this.getParentDepList();
    this.getEmployeeList();
  }

  public getParentDepList() {
    this.masterService.getParentDept().subscribe((res: MyApiResponse) => {
      // MyApiResponse add this in service function also
      console.log(res.data);
      this.parentDeptList = res.data;
    });
  }

  public onParentDeptChange() {
    console.log(this.employeeObj);
    this.masterService
      .getChildDeptUsingParentId(this.deptId)
      .subscribe((res: MyApiResponse) => {
        console.log(res.data);
        this.childDeptList = res.data;
      });
  }

  createEmploye() {
    debugger;
    this.employeeService.createNewEmployee(this.employeeObj).subscribe(
      (res: any) => {
        debugger;
        alert('success');
      },
      (error) => {
        alert(error);
      }
    );
  }

  public getEmployeeList() {
    this.employeeService.getEmployees().subscribe((res: any) => {
      console.log('res', res);
      this.employeeList = res;
    });
  }

  public deleteEmployee(employeeId: any) {
    let result = confirm('Are you sure want to delete ' + employeeId);
    if (result) {
      this.employeeService.delEmployee(employeeId).subscribe(
        (res: any) => {
          alert('Successfully Deleted');
          this.getEmployeeList();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  public editEmployee(employee: Employee) {
    this.employeeObj = employee;
  }

  public updateEmployeDetails() {
    this.employeeService.updateEmployeeDetails(this.employeeObj).subscribe(
      (res: any) => {
        alert('Data Updated');
        this.getEmployeeList();
      },
      (error) => {
        console.log(error);
        alert(error.message);
      }
    );
  }

  public visibleEmployeeForm() {
    this.showEmployeeForm.set(true);
  }

  public hideEmployeeForm() {
    this.showEmployeeForm.set(false);
  }
}
