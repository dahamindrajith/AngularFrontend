import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component';
import { ModelComponent } from '../model/model.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{

  employee?:ModelComponent[];

  constructor(private employeeService: ServiceComponent){}

  ngOnInit() {
      this.getUsers();
  }

  displayedColumns: string[] = ['position', 'name'];

  getUsers(){
    this.employeeService.getUsers().subscribe(data=>{
      this.employee=data;
      console.log(this.employee);
    },
    (error:HttpErrorResponse)=>{
      alert(error.message)
    }
    )
  }

}
