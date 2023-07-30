import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterClass } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component copy.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  userData:RegisterClass
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.userData = new RegisterClass()
   }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: [this.userData.firstName, Validators.required],
      lastName: [this.userData.lastName, Validators.required],
      email: [this.userData.email, [Validators.required, Validators.email]],
      address: [this.userData.address, Validators.required],
      password: [this.userData.password, [Validators.required,Validators.pattern('^(?=.*[0-9a-zA-Z]).{6,}$')]],
      confirmPassword: [this.userData.confirmPassword, [Validators.required,Validators.pattern('^(?=.*[0-9a-zA-Z]).{6,}$')]]

    })
  }

  get validation(){
    return this.registerForm.controls
  }
  disableCut(event: any) {
    event.preventDefault()
  }
  disableCopy(event: any) {
    event.preventDefault()
  }
  disablePaste(event: any) {
    event.preventDefault()
  }
  submitRegisterData() {



    if(this.registerForm.valid){
      this.userData.address = this.registerForm.value.address;
      this.userData.confirmPassword = this.registerForm.value.confirmPassword;
      this.userData.password = this.registerForm.value.password;
      this.userData.email = this.registerForm.value.email
    }
     this.authService.signup(this.userData).subscribe((response) => {
     alert('User signed up successfully:');
      this.router.navigate(['login'])
    });


  }
}
