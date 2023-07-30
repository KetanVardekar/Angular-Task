import { Component, Input, OnInit,Inject, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  @ViewChild('myFormRef', { static: false }) myForm!: NgForm;
  employeeData:any={
    name:'',
    address:'',
    age:'',
    mobile:'',
    email:''
  }

  constructor(private authService:AuthService,private dialogRef: MatDialogRef<AddEditEmployeeComponent>,@Inject(MAT_DIALOG_DATA) public data: any)  { }

  ngOnInit(): void {

  }
save(){
  if(this.myForm.valid){
  this.authService.addEmployees(this.employeeData).subscribe((res:any)=>{
    this.dialogRef.close(true);

  })
  }else{
    alert('Enter ALL Valid Details')
  }

}
cancel(){

    this.dialogRef.close(false);


}
}
