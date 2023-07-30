import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmployeeComponent } from '../add-edit-employee/add-edit-employee.component';
import { AuthService } from 'src/app/services/auth.service';

// import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employeeData: any
  constructor(private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
    this.getEmployees()
  }
  getEmployees() {
    this.authService.getEmployees().subscribe((res: any) => {
      this.employeeData = res


    })
  }
  addEmployee() {
    const dialogRef = this.dialog.open(AddEditEmployeeComponent, {
      width: '600px',
      height: '650px',
      panelClass: 'my-class'  // Add a custom panel class
    })
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.getEmployees()
      }
    })
  }
  deleteEmployees(id:any){
this.authService.deleteEmployees(id).subscribe((res:any)=>{
  if(res){
    this.getEmployees()
  }
})
  }

}
