import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelComponent } from '../model/model.component';

@Injectable()
export class ServiceComponent {
  
  constructor(private httpClient:HttpClient){}



  baseURL='http://localhost:8080/employee/add';

  addEmployee(employee?: ModelComponent):Observable<object>{
    return this.httpClient.post<object>(`${this.baseURL}`,employee);
  }

  baseURLGET='http://localhost:8080/employee/get';
  getUsers():Observable<ModelComponent[]>{
    return this.httpClient.get<ModelComponent[]>(`${this.baseURLGET}`);
  }

}
