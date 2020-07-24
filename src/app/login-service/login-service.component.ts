import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-login-service',
  templateUrl: './login-service.component.html',
  styleUrls: ['./login-service.component.css']
})
export class LoginServiceComponent implements OnInit {
  loggedUser : any;
  user: any;
  constructor(private router: Router , private service : ServiceService) {
    this.user = { email: '', password: '' };
  }

  ngOnInit(): void {
  }

  redirect(): void {
    this.router.navigate(['register']);
  }
  
  loginSubmit(loginForm: any): void {
    
    this.service.loginService(this.user.email,this.user.password).subscribe((res: any) => {console.log(res),this.loggedUser = res});
    if(this.loggedUser != null){
      this.router.navigate(['service-hp']);
    }
    
    console.log(loginForm);
  }
}
