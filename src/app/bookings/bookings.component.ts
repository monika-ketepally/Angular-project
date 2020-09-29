import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  books : any;
  employees:any;
  wId : any;
  wMobile : any;
  bId : any;
  wName : any;
  str : any;
  x :any;
  y : any;
  constructor(private service1 : ServiceService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.service1.getBooks().subscribe((result: any) => {console.log(result),this.books = result});
    this.service1.getWorkers().subscribe((result: any) => {console.log(result),this.employees = result});
    this.x = 0;
    this.y = 0;
   
  }


  submit(book : any): any{
    console.log("INside");
    this.employees.forEach(element => {
      console.log(element.workerId,element.mobile);
      if(element.workerId === Number(this.wId)){
        this.wMobile = element.mobile;
        book.mobile = this.wMobile;
        this.wName = element.workerName;
        
      }
      book.worker.workerId = Number(this.wId);
    });
    console.log(book);
    this.str = this.datePipe.transform(book.date,'yyyy-MM-dd')
    console.log(this.str);
   this.service1.updateBook(book).subscribe((result : any) => {console.log(result)});
   console.log(this.service1.custMob);
   //this.service1.message(this.wName,this.wMobile,this.str,book.time).subscribe((result : any) => {console.log(result)});
  }

  check(emp : any):boolean{
      if(emp.worker.workerId === 1){
        this.x = this.x+1;
        return false;
      }
      else{
        this.y = this.y+1;
        return true;
      }
  }

}
