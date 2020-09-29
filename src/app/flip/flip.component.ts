import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'
import { ViewChild, ElementRef } from '@angular/core'
import { NotificationService } from '../notification.service'

@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.css']
})
export class FlipComponent implements OnInit {
  loggedUser: { custId: "", custName: "", email: "", mobile: "", password: "", address: "", pincode: "" };
  user: any;
  userr: any;
  address: any;
  containment: any;
  auth2: any;
  show: any;
  Name: any;
  loggedPro : any;
  off : any;
  @ViewChild('loginRef', { static: true }) loginElement: ElementRef;

  constructor(private router: Router, private service: ServiceService, private ngZone: NgZone, private notifyService: NotificationService) {
    this.user = { custId: "", custName: "", email: "", mobile: "", password: "", address: "", pincode: "" };
    this.address = { key: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYWlsSWRlbnRpdHkiOiJzaGFyYXRoY2hhbmRyaWthMTRAZ21haWwuY29tIn0.anaLRie5aAtnxEZ-iVGmxRp7HiHh9Y5n2W4WXC1kClw", pincode: '' };
    this.userr = { email: '', password: '' };
    }

  ngOnInit(): void {
    this.googleInitialize();
  }

  redirect(): void {
    this.router.navigate(['register']);
  }

  async loginSubmit(loginForm: any) {

    await this.service.loginCusto(this.user.email, this.user.password).then((res: any) => {
      if (res != null) {
        this.service.custMob = res.mobile;
        console.log(res), this.loggedUser = res;
        this.service.cust =this.loggedUser;
        this.service.custId = res.custId;
        this.service.userType = "cust";
        this.address.pincode = res.pincode;
        this.service.getContainment(this.address).subscribe((data: any) => {
          this.containment = data;
          console.log(this.containment);
          if (this.containment.data.hasContainmentZone === false) {
            this.router.navigate(['trial']);
          }
          else {
            this.router.navigate(['covid']);
          }
         // this.router.navigate(['trial']);

          this.service.setUserLoggedIn(this.loggedUser.custName);
          this.notifyService.showSuccess("logged in successfully :)", "hey! " + this.loggedUser.custName)
        });
      }

      else {
        this.notifyService.showError("looks like you have entered something wrong!! :|","wrong credentials")
      }
    });


    console.log(this.address);
    // this.service.getContainment(this.address).subscribe((data:any) =>{ this.containment=data; console.log(this.containment); if(data.hasContainmentZone == false){ this.router.navigate(['home']);}
    // else{
    //  this.router.navigate(['covid']);
    //}});
  }/*
  registerSubmit(registrationForm : any) : void{
    
  }
  regSubmit(): void {
    this.service.registerCust(this.userr).subscribe((result: any) => { console.log(result);
    
  if(result === "Success")
  this.notifyService.showSuccess("" , "Registered successfully :)");
  else{
    this.notifyService.showError("" , "Something went wrong,try again!");
  }
});
    console.log(this.userr);
    this.router.navigate(['flip']);
    this.userr = { custId: "", custName: "", email: "", mobile: "", password: "", address: "", pincode: "" };
  }*/

  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '325431466584-sg1c3oc6gtet4n96tfvv6nnee78r00u7.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        this.show = true;
        this.Name = profile.getEmail();
        this.apicheck();
        //console.log('Image URL: ' + profile.getImageUrl());
        //console.log('Email: ' + profile.getEmail());
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }


  async apicheck() {
    this.user.email = this.Name;
    console.log(this.user.email);
    await this.service.loginCustE(this.user.email).then((res: any) => {
      if (res != null) {
        console.log("hello"), this.loggedUser = res;
        this.address.pincode = res.pincode;
        this.service.cust =this.loggedUser;
        this.service.custId = res.custId;
        this.service.userType = "cust";

        this.service.custMob = res.mobile;
        this.service.getContainment(this.address).subscribe((data: any) => {
          this.containment = data;
          console.log(this.containment);
          if (this.containment.data.hasContainmentZone === false) {
            this.ngZone.run(() => this.router.navigate(["trial"])).then();
            // this.router.navigate(['trial']);
          }
          else {
            this.router.navigate(['covid']);
          }
        });
        this.notifyService.showSuccess("logged in successfully :)", "hey! " + this.loggedUser.custName);
        this.service.setUserLoggedIn(this.loggedUser.custName);
        console.log(this.address);

      }
      else {
        this.notifyService.showError("looks like you have entered something wrong!! :|","wrong credentials")
      }
    });
  }

//professional

async loginSubmitPro() {
    
  await this.service.loginService(this.userr.email,this.userr.password).then((res: any) => {this.loggedPro = res});
  if(this.loggedPro != null){
    sessionStorage.setItem('servId',this.loggedPro.serviceId),this.service.serId = this.loggedPro.serviceId,
    this.notifyService.showSuccess("logged in successfully :)","hey! "+this.loggedPro.serviceName)
    this.router.navigate(['sercom']);
    this.service.ser = this.loggedPro;
    this.service.setUserLoggedIn(this.loggedPro.serviceName);
    this.service.userType = "ser";
    //1	U+1F609	
  }
  else{
    this.notifyService.showError("looks like you have entered something wrong!! :|","wrong credentials")
  }
}

regPro(){
  this.router.navigate[('regpro')];
}
check():any{
  if((this.user.email!=null && this.user.password!=null) ||(this.userr.email!=null && this.userr.password!=null)){
    return true;
  }
  else{
    return false;
  }
}
}