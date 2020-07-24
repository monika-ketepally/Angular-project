import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedUser : {custId : "" , custName : "" , email : "" , mobile : "" , password : "" , address : "" , pincode : ""};
  user: any;
  address : any;
  containment : any;
  constructor(private router: Router , private service : ServiceService) {
    this.user = { email: '', password: '' };
    this.address = {key : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYWlsSWRlbnRpdHkiOiJzaGFyYXRoY2hhbmRyaWthMTRAZ21haWwuY29tIn0.anaLRie5aAtnxEZ-iVGmxRp7HiHh9Y5n2W4WXC1kClw",pincode : ''};
  }

  ngOnInit(): void {
  }

  redirect(): void {
    this.router.navigate(['register']);
  }
  
  loginSubmit(loginForm: any): void {
    
    this.service.loginCusto(this.user.email,this.user.password).subscribe((res: any) => 
    {if(res != null){console.log(res),this.loggedUser = res;
      this.address.pincode=res.pincode;
      this.service.getContainment(this.address).subscribe((data:any) =>
      { this.containment=data; 
        console.log(this.containment); 
        if(this.containment.data.hasContainmentZone === false){ 
          this.router.navigate(['home']);}
        else{
          this.router.navigate(['covid']);
    }});}
    else{
      alert("wrong credentials");
    }});
   
    
    console.log(this.address);
   // this.service.getContainment(this.address).subscribe((data:any) =>{ this.containment=data; console.log(this.containment); if(data.hasContainmentZone == false){ this.router.navigate(['home']);}
 // else{
  //  this.router.navigate(['covid']);
  //}});
}
}
