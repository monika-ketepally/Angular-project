import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updatecust',
  templateUrl: './updatecust.component.html',
  styleUrls: ['./updatecust.component.css']
})
export class UpdatecustComponent implements OnInit {
user: any;
editObject : any;
x : any
  constructor(private service: ServiceService , private router : Router,private notifyService : NotificationService,private location : Location) {
    this.user = this.service.cust;
    this.editObject = { custId: "", custName: "", email: "", mobile: "", password: "", address: "", pincode: "" };
    this.editObject = this.user;
    //this.editObject.password = "";
  }

  ngOnInit(): void {
  }
  update():any{
    if(this.editObject.password === this.x){
      console.log("password matched");
      this.location.back();
      this.service.uname = this.editObject.custName;
      this.service.cust = this.editObject;
      this.service.updateCust(this.editObject).subscribe((result: any) => {console.log(result),this.user = result});
      this.notifyService.showSuccess("your profile is updated", "hey! " + this.user.custName)
    }
    else{
      this.notifyService.showError("entered password doesn't match with original password","wrong password")
    }
  }
  home():any{
    this.location.back();
  }

}
