import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: any = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData() {
    this.authService.getData().subscribe((data: any) => {
      if (data && data.length) {
        this.loginData.email = data[0].email

      }
    })
  }
  signup() {



    this.router.navigate(['register'])
  }
  login(data: any) {

    this.authService.login(data).subscribe((users: any) => {
      if (users.length === 1) {
        alert('User logged in successfully:');
        this.router.navigate(['dashboard'])
      } else {
        alert('Invalid credentials. Login failed.');
      }
    });
  }
}
