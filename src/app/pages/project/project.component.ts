import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Observable } from 'rxjs';
import { Employee, Project } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';
import { error } from 'console';

@Component({
  selector: 'app-project',
  imports: [CommonModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  standalone: true,
})
export class ProjectComponent {
  public currentView: string = 'list';
  public employeeList: [] = [];
  public projectList: Project[] = [];
  public parentDeptList: any;
  public childDeptList: any;

  public projectForm: FormGroup = new FormGroup({});
  public EmployeeService = inject(EmployeeService);
  public employeeData$: Observable<Employee[]> = new Observable<Employee[]>();

  constructor() {
    this.initializationForm(); // this is compalsary for form intialization
    this.employeeData$ = this.EmployeeService.getEmployees();
  }

  ngOnInit() {
    this.getAllProjects();
  }

  public initializationForm(project?: Project) {
    this.projectForm = new FormGroup({
      projectId: new FormControl(project ? project.projectId : 0),
      projectName: new FormControl(project ? project.projectName : ''),
      clientName: new FormControl(project ? project.clientName : ''),
      startDate: new FormControl(project ? project.startDate : ''),
      leadByEmpId: new FormControl(project ? project.leadByEmpId : 0),
      contactPerson: new FormControl(project ? project.contactPerson : ''),
      contactNo: new FormControl(project ? project.contactNo : ''),
      emailId: new FormControl(project ? project.emailId : ''),
    });
    this.currentView = 'form';
  }

  public saveProject() {
    const formValue = this.projectForm.value;
    if (formValue.projectId === 0) {
      this.EmployeeService.createProject(formValue).subscribe(
        (res: Project) => {
          alert('Project Created');
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.EmployeeService.updateProjects(formValue).subscribe(
        (res: Project) => {
          alert('Project Updated Sucssessfully!');
          this.getAllProjects();
          this.currentView = 'list';
        }
      );
    }
  }

  public getAllProjects() {
    this.EmployeeService.getProjects().subscribe(
      (res: Project[]) => {
        this.projectList = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public editProject(projectData: any) {
    this.initializationForm(projectData);
  }

  public deleteProjectt(id: number) {
    this.EmployeeService.delProject(id).subscribe(
      (res: any) => {
        alert('Project Successfully Deleted...!');
        this.getAllProjects()
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
