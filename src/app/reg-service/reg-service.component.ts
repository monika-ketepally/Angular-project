import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-reg-service',
  templateUrl: './reg-service.component.html',
  styleUrls: ['./reg-service.component.css']
})
export class RegServiceComponent implements OnInit {

  user : any;
  constructor(private router: Router , private service:ServiceService ) { 
    this.user = {serviceId : "" , serviceName : "" , category : "" , coupons : "123svgd" , 
      rating : "4.3" , reviews : "xyz" ,  email : "" , mobile : "" , password : "" , address : ""};
  }

  ngOnInit(): void {
  }
  registered():void{
    alert("registered");
    console.log(this.user.custName+" registered successfully!!");
  }
  regSubmit(registrationForm : any):void{
    this.service.registerSer(this.user).subscribe((result:any)=>{console.log(result)});
    console.log(this.user);
  }
login() :void{
  this.router.navigate(['login-service']);
}
}