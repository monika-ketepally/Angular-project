import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-ser',
  templateUrl: './update-ser.component.html',
  styleUrls: ['./update-ser.component.css']
})
export class UpdateSerComponent implements OnInit {

  user: any;
editObject : any;
x : any
  constructor(private service: ServiceService , private router : Router,private notifyService : NotificationService,private location : Location) {
    this.user = this.service.ser;
    this.editObject = {serviceId : "" , serviceName : "" , category : "" , coupons : " " , 
    rating : "" , reviews : " " ,  email : "" , mobile : "" , password : "" , address : "",imageName : ""};
    this.editObject = this.user;
    }
  ngOnInit(): void {
  }
  update():any{
    if(this.editObject.password === this.x){
      console.log("password matched");
      this.location.back();
      this.service.updateSer(this.editObject).subscribe((result: any) => {console.log(result),this.user = result});
      this.notifyService.showSuccess("your profile is updated", "hey! " + this.user.serviceName)

    }
    else{
      this.notifyService.showError("entered password doesn't match with original password","wrong password")
    }
  }
  home():any{
    this.location.back();
    }
}
