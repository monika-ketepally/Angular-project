import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'
import { NotificationService } from '../notification.service'
@Component({
  selector: 'app-regpro',
  templateUrl: './regpro.component.html',
  styleUrls: ['./regpro.component.css']
})
export class RegproComponent implements OnInit {
  loggedUser : any;
  user: any;
  userr : any;
  title = 'toaster-not';
  min  = 1000;
  max = 9999;
  otp : any;
  verifyOtp : any;
  constructor(private router: Router , private service : ServiceService , private notifyService : NotificationService) {
    this.user = { custId: "", custName: "", email: "", mobile: "", password: "", address: "", pincode: "",gender : "",city : "" };
    this.userr = {serviceId : "" , serviceName : "" , category : "" , coupons : " " , 
    rating : "0" , reviews : " " ,  email : "" , mobile : "" , password : "" , address : "",imageName : null , city:""};

   }
   validateEmail(email) {
    if (email == "[^ @]*@[^ @]*") {
    return true;
    }
    else{
      return false;}
    }
  ngOnInit(): void {
  }
 /* async loginSubmit() {
    
    await this.service.loginService(this.user.email,this.user.password).then((res: any) => {console.log(res),sessionStorage.setItem('servId',res.serviceId),this.service.serId = res.serviceId,this.loggedUser = res});
    if(this.loggedUser != null){
      this.notifyService.showSuccess("logged in successfully :)","hey! "+this.loggedUser.serviceName)
      this.router.navigate(['sercom']);
      this.service.ser = this.loggedUser;
      this.service.setUserLoggedIn(this.loggedUser.serviceName);
      this.service.userType = "ser";
    }
    else{
      this.notifyService.showError("looks like you have entered something wrong!! :|","wrong credentials")
    }
  }*/


  async regSubmit(){
    await this.service.registerSer(this.userr).then((result:any)=>{console.log(result);
      if(result === "Success"){
  this.notifyService.showSuccess("" , "Registered successfully :)");
  this.router.navigate(['flip']);

      }
      else if(result === "Exists"){
    this.notifyService.showError("" , "Mobile Number already exists.");
  }
  else{
    this.notifyService.showError("" , "Something went wrong,try again!");
  }
    });
    console.log(this.userr);
    this.userr = {serviceId : "" , serviceName : "" , category : "" , coupons : " " , 
    rating : "0" , reviews : " " ,  email : "" , mobile : "" , password : "" , address : "",imageName : "" , city:""};

  }
  registerSubmit(registrationForm : any) : void{
    
  }
  async regSubmitcust() {
    if(this.verifyOtp == this.otp){
    await this.service.registerCust(this.user).then((result: any) => { console.log(result);
    
      if(result === "Success"){
        this.user = { custId: "", custName: "", email: "", mobile: "", password: "", address: "", pincode: "",gender : "",city : "" };
      this.notifyService.showSuccess("" , "Registered successfully :)");
      this.router.navigate(['flip']);
      }
      else if(result === "Exists"){
        this.notifyService.showError("" , "Mobile Number already exists.");
      }
      else{
        this.notifyService.showError("" , "Something went wrong,try again!");
      }
});
    console.log(this.user);
  }
  else{
    this.notifyService.showError("" , "Wrong OTP!");
  }
}
  
  
  showToasterSuccess(){
      this.notifyService.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
  }
  
  showToasterError(){
      this.notifyService.showError("Something is wrong", "ItSolutionStuff.com")
  }
  
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "ItSolutionStuff.com")
  }
  
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "ItSolutionStuff.com")
  }
  setCat(s : any):any{
    this.userr.category = s;
  }

  //otp
  getRandomIntInclusive() {

    console.log("fun");
    if(this.user.mobile.length != 0){
      console.log("if");
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    this.otp =  Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
    this.service.sendOtp(this.otp,this.user.mobile).subscribe((result:any)=>{console.log(result)});
   }
  }

}

