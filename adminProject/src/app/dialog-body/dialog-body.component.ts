import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
      
  }

  redirect(){
this.router.navigate(['']);
  }

}
