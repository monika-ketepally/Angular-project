import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {
  products:any;
  constructor() { }

  ngOnInit(): void {
    this.products = [{id : 1001, name : 'Toni&Guy', description : 'Road No.36,Jubilee Hills', price : 175, imagePath : 'assets/images/1001.jpg'},
    {id : 1002, name : 'The Hair Edge', description : 'HiTech City Road,Madhapur', price : 100, imagePath : 'assets/images/1002.jpg'},
    {id : 1003, name : 'Jawed Habib', description : 'Gachibowli', price : 679, imagePath : 'assets/images/1003.jpg'},
  ];
  
  }

}
