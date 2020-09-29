import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cust-bookings',
  templateUrl: './cust-bookings.component.html',
  styleUrls: ['./cust-bookings.component.css']
})
export class CustBookingsComponent implements OnInit {
bookings : any;
str : any;
date : any;
currentRate = 0;
currentRat = 0;
time :any;
currentTime : any;
ratinn(r : any):any{
  this.currentRate = r.rating;
}
  constructor(private service: ServiceService , private router : Router,private notifyService : NotificationService,private datePipe: DatePipe) { 
    //this.user = this.service.cust;
    this.currentTime = new Date().getHours();
    console.log(this.currentTime);

    this.service.custBooks().subscribe((result: any) => {console.log(result),this.bookings = result,
    this.bookings.forEach(element => {
      console.log();
      this.str = this.datePipe.transform(element.date,'yyyy-MM-dd')
      this.date = new Date();
      this.time = new Date();
      this.time = this.datePipe.transform(element.date,'hh-mm-ss')
      console.log(this.time);
      this.date = this.datePipe.transform(this.date,'yyyy-MM-dd')
     if(element.status === "cancelled"){
       element.status = "cancelled";
     }
     else if(this.str <this.date){
        element.status = "done"
      }
      else if(this.str >this.date){
        element.status = "not done"
      }
      else if(this.str ===this.date){
         if(this.currentTime >= element.time.substring(0,2) && this.currentTime < element.time.substring(3,2)){
          element.status = "on going"
      }
      else{
        element.status = "not done"
      }
    }
      else{
        element.status = "done"
      }
    });});

  }

  ngOnInit(): void {
  }
update(book:any):any{
  book.rating = this.currentRat;
  console.log(this.currentRat);
  console.log(book);
  book.worker.rating+=this.currentRat;
  book.worker.people+=1; 
this.service.updateBook(book).subscribe((result : any) => {console.log(result)});
this.service.updateemp(book.worker).subscribe((result : any) => {console.log(result)});
}

check(book:any):any{
  if(book.status==='not done' || book.status==='on going'){
    return true;
  }
  else{
    return false;
  }
}
ratin(book:any):any{
if(book.rating != 0 || book.status === "cancelled"){
  return true;
}
else{
  return false;
}
}
assign(book:any):any{
  if(book.worker.workerName)
  return true;
  else
  return false;
}

statusUp(book:any):any{
  book.status = "cancelled";
  book.time = "0";
  this.service.updateBook(book).subscribe((result : any) => {console.log(result)});
  
}
serviceFeed(s : any):any{
  this.service.serviceObj = s.service;
  this.service.serviceII = s.service.serviceId;
  console.log(this.service.serviceObj);
  this.router.navigate(['one-service']);
}
ck(booking:any):any{

  if(booking.service.imageName === null)
    return true;
    else{
      console.log(booking.service.imageName);
      return false;
}
}
}
