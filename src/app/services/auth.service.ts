import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  signup(user: any) {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  login(credentials: any) {
    return this.http.get(`${this.baseUrl}/users`, { params: credentials });
  }
  getData(){
   return this.http.get(`${this.baseUrl}/users`)

 }
 addEmployees(employees: any) {
  return this.http.post(`${this.baseUrl}/employees`, employees);
}
getEmployees(){
  return this.http.get(`${this.baseUrl}/employees`)
}
deleteEmployees(id:any){
  return this.http.delete(`${this.baseUrl}/employees/${id}`)
}
}
