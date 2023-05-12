import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModelComponent } from '../model/model.component';
import { ServiceComponent } from '../service/service.component';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  employee: ModelComponent = new ModelComponent();

  constructor(
    private employeeService: ServiceComponent,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {}

  registerUser() {
    if (this.employee.name === '') {
      alert('Enter User Name');
    } else if (this.employee.email === '') {
      alert('Enter Email');
    } else if (this.employee.password === '') {
      alert('Enter Password');
    } else if (this.employee.confirmPassword === '') {
      alert('Enter Confirm Password');
    } else if (this.employee.confirmPassword !== this.employee.password) {
      alert('Enter Correct Password');
    } else {
      console.log(this.employee);
      this.openDialog();
    }
  }

  openDialog() {
    this.matDialog.open(DialogBodyComponent, {
      width: '350px',
    });
    this.employeeService.addEmployee(this.employee).subscribe();
  }
}
