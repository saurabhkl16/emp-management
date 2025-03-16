export class Employee {
  employeeId: number;
  employeeName: String;
  contactNo: String;
  emailId: String;
  deptId: number;
  password: String;
  gender: String;
  role: String;
  createdDate: Date;

  constructor() {
    this.employeeId = 0;
    this.employeeName = '';
    this.contactNo = '';
    this.emailId = '';
    this.deptId = 0;
    this.password = '';
    this.gender = '';
    this.role = '';
    this.createdDate = new Date();
  }
}
