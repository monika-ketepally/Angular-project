import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  check : boolean;
  userName : any;
  constructor(private router: Router, private service : ServiceService) { }

  ngOnInit(): void {
  }
  loginck():boolean{
    this.check = this.service.getUserLogged();
    return this.check;
  }
  
    logout() : void{
      this.router.navigate(['trial']);
      this.service.setUserLoggedOut();
    }
  
    getName() : any{
      return this.service.getUserName();
      
    }
    userType():any{
      if(this.service.userType === "cust"){
        return true;
      }
      else{
        return false;
      }
    }

}
