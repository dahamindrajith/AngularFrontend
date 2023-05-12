import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  employee: ModelComponent = new ModelComponent();

  constructor() {}

  ngOnInit() {}

  loginUser() {
    if (this.employee.name === '') {
      alert('Enter User Name');
    } else if (this.employee.password === '') {
      alert('Enter Password');
    } else {
      console.log(this.employee);
    }
  }
}
