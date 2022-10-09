import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  books = [
    {id : 1,title :"the slight edge",author :"jeff oslon",prix :23.00},
    {id : 2,title :"atomic habits",author :"james clear",prix :18.00},
    {id : 3,title :"the slight edge",author :"call newport",prix :18.70}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
