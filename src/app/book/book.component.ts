import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  serList: any;
  bookS: any;
  services: any;
  times: any;
  workers: any;
  nine: any;
  twelve: any;
  three: any;
  d : any;
  today : any;
  nextDate : any;
  date: any;
  finalBook: any;
  bookings : any;
  off : any;
  constructor(private router: Router, private service: ServiceService, private datePipe: DatePipe,private location : Location) {
    //  this.serList = [{serId : 1 , serName : "x", price : 300},
    //      {serId : 2 , serName : "y", price : 300},
    //      {serId : 3 , serName : "z", price : 300}];
    this.service.getSers().subscribe((result: any) => { console.log(result), this.serList = result });
    this.bookS = {
      bookingId: "", appointmentType: "home", category: "", date: "", mobile: "9876543210", price: "", time: "", customer: { custId: this.service.cust.custId }, service: { serviceId: this.service.serviceII }, services: { id: '' }, worker: { workerId: '' },
      rating: "0", status: "not done"
    };
    this.d = null;
    this.three = 0;
    this.twelve = 0;
    this.nine = 0;
    this.today = new Date();
    this.nextDate = new Date();
    this.today.setDate(this.nextDate.getDate() + 1);    
    this.nextDate.setDate(this.today.getDate() + 1);    
    this.today = this.datePipe.transform(this.today,'yyyy-MM-dd');
    this.nextDate = this.datePipe.transform(this.nextDate,'yyyy-MM-dd');
    this.bookS.time=null;
    this.bookS.services.id=0;
    this.off = 0;
    //this.services = {id :'',price:'',serviceeName:'',service:{serviceId:this.service.serviceII}};}
  }
  ngOnInit(): void {
    // console.log(this.bookS.date);
    this.service.custBooks().subscribe((result: any) => { console.log(result), this.bookings = result });

  }
  regSubmit(){
    this.bookS.services.id = Number(this.bookS.services.id);
    this.service.x = Number(this.bookS.services.id);
    this.bookS.price = this.off;
    this.service.bookSer(this.bookS).subscribe((result: any) => { console.log(result);this.finalBook = result;
    //console.log(this.bookS.worker.workerName,this.bookS.mobile,this.service.cust.mobile,this.bookS.time);
   // console.log("book: " + this.bookS);
    this.service.message(this.finalBook.worker.workerName,this.finalBook.worker.mobile,this.bookS.date,this.bookS.time).subscribe((result : any) => {console.log(result)});});
    this.location.back();
  }
  book(s: any): any {
    s.price = this.bookS.price;
    s.serviceeName = this.bookS.category;
  }
  choose(ti: any): any {
    this.bookS.time = ti;
  }

  chooseDate(datee: any): any {
    console.log(datee);
    this.d = this.datePipe.transform(datee,'dd-MM-yyyy');
    this.bookS.date = this.datePipe.transform(datee,'yyyy-MM-dd');
    this.date = String(this.d);
    console.log(this.d);
    this.service.getWor().subscribe((result: any) => { console.log(result), this.workers = result });
    this.service.checkTimee(this.d).subscribe((result: any) => { console.log(result), this.times = result;
      this.nine = 0;
      this.three = 0;
      this.twelve = 0;
     this.times.forEach(element => {
      if (element.time === '09-12') {
        this.nine += 1;
      }
      else if (element.time === '12-15') {
        this.twelve += 1;
      }
      else {
        this.three += 1;
      }
    });
    
    console.log(this.nine,this.twelve,this.three);
    if (this.nine === this.workers.length) {
      this.nine = 1;
    }
    else{
      this.nine = 0;
    }
    if (this.three === this.workers.length ){
      this.three = 1;
    }
    else{
      this.three = 0;
    }
    if (this.twelve === this.workers.length ){
      this.twelve = 1;
    }
    else{
      this.twelve = 0;
    }
    console.log(this.nine,this.twelve,this.three);
  });
  }

  setSer(s:any):any{
    console.log(s);
    this.bookS.services = s; 
  }

  check():any{
    if(this.bookS.services.id!=0 && this.d!=null && this.bookS.time!=null){
      this.off = this.bookS.services.price-(this.bookS.services.price/10);
      return true;
    }
    else{
      return false;
    }
  }

  discount() : any{
    if(this.bookings.length === 0){
      this.off = this.bookS.services.price-(this.bookS.services.price/10);
      return true;
    }
    return false;
  }
}