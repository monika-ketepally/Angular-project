import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  servicess:any;
  cat : any;
  filter : any;
  order : any;
  constructor(private service : ServiceService,private router : Router) { }

  ngOnInit(): void {
   /* this.products = [{id : 1001, name : 'Toni&Guy', description : 'Road No.36,Jubilee Hills', price : 175, imagePath : 'assets/images/1001.jpg'},
    {id : 1002, name : 'The Hair Edge', description : 'HiTech City Road,Madhapur', price : 100, imagePath : 'assets/images/1002.jpg'},
    {id : 1003, name : 'Jawed Habib', description : 'Gachibowli', price : 679, imagePath : 'assets/images/1003.jpg'},
  ];*/
  if(this.service.getUserLogged() === false){
  this.service.getServiceByCat(this.service.cat).subscribe((result: any) => {console.log(result),this.servicess = result});
  }
  else{
    this.service.getServiceByCity(this.service.cat).subscribe((result: any) => {console.log(result),this.servicess = result});
  }
}
choose(s : any) : any{
  this.service.serviceObj = s;
  this.service.serviceII = s.serviceId;
  console.log(this.service.serviceObj);
}
click(opt : any,order : any) : any{
  this.filter = opt;
  console.log(this.filter);
  this.order = order;
  this.router.navigate(['services']);

}
ck(x:any):any{

  if(x.imageName === null)
    return true;
    else{
      console.log(x.imageName);
      return false;
}
}
}
