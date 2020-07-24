import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : any;
  constructor(private router: Router , private service:ServiceService ) { 
    this.user = {custId : "" , custName : "" , email : "" , mobile : "" , password : "" , address : "" , pincode : "",imageName : ""};
  }

  ngOnInit(): void {
  }
  registered():void{
    alert("registered");
    console.log(this.user.custName+" registered successfully!!");
  }
  regSubmit(registrationForm : any):void{
    this.service.registerCust(this.user).subscribe((result:any)=>{console.log(result)});
    console.log(this.user);
  }
login() :void{
  this.router.navigate(['login']);
}
registerSer():void{
  this.router.navigate(['reg-service']);
}

}
