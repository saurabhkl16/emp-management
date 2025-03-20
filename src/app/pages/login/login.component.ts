import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
})
export class LoginComponent {
  public loginObj: any = {
    username: 'hradmin@gmail.com',
    password: '112233',
  };

  public http = inject(HttpClient); // In angular 16 new way
  public router = inject(Router);
  // constructor(private http: HttpClient) {} // old way to inject

  ngOnInit() {}

  public login(loginForm: any) {
    this.http
      .post(
        'https://projectapi.gerasim.in/api/EmployeeManagement/login',
        this.loginObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          localStorage.setItem('superAdmin', JSON.stringify(res.data));
          this.router.navigateByUrl('dashboard');
        } else {
          alert(res.message);
        }
      });
  }
}
