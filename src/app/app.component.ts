import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstore';

  books = [
    {id : 1,title :"the slight edge",author :"jeff oslon",prix :23.00},
    {id : 2,title :"atomic habits",author :"james clear",prix :18.00},
    {id : 3,title :"the slight edge",author :"call newport",prix :18.70}
  ]
}
