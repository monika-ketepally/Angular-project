import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import{ Location } from '@angular/common';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-one-service',
  templateUrl: './one-service.component.html',
  styleUrls: ['./one-service.component.css']
})
export class OneServiceComponent implements OnInit {
  ser : any;
  reviews : any;
  workers : any;
  currentRate = 0;
  currentRat = 0;
  rev : any;
  constructor(private service1:ServiceService,private location : Location,private router: Router, private notifyService : NotificationService) { 
    
    
  }

  ngOnInit(): void {
    this.ser = this.service1.serviceObj;
    this.rev = {reviewId: '',rating:'',review:'',customer:{custId : this.service1.custId},service:{serviceId:this.ser.serviceId}}
    this.service1.getRevieww(this.ser.serviceId).subscribe((result: any) => {console.log(result),this.reviews = result});
    this.service1.getWor().subscribe((result: any) => {console.log(result),this.workers = result});
    this.ser.rating = Number(this.ser.rating);
  }
  ratin(r : any):any{
    this.currentRate = r.rating;
  }
  submit():any{
    this.rev.rating = this.currentRat;
    if(this.service1.custId!= null){
      console.log(this.rev);
    this.service1.sendReview(this.rev).subscribe((result : any) => console.log(result));
    this.service1.getRevieww(this.ser.serviceId).subscribe((result: any) => {console.log(result),this.reviews = result});
    
    }
    this.service1.getRevieww(this.ser.serviceId).subscribe((result: any) => {console.log(result),this.reviews = result});
//    this.location.back();
  //  this.location.forward();
    }
    book():any{
      if(this.service1.cust != null){
      this.router.navigate(['book']);
      }
      else{
        this.notifyService.showInfo("", "Not logged in")
      }
    }
    ck():any{

      if(this.ser.imageName === null)
        return true;
        else{
          console.log(this.ser.imageName);
          return false;
    }
    }
}