import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-custreview',
  templateUrl: './custreview.component.html',
  styleUrls: ['./custreview.component.css']
})
export class CustreviewComponent implements OnInit {
  secretCode : any;
  currentRate = 0;
  currentRat = 0;
  time :any;
  code : boolean;
  workerId : any;
  bookings : any;
  ratinn(r : any):any{
    this.currentRate = r.rating;
  }
  
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
  }
  submit() : any{
    this.service.checkCode(this.secretCode).subscribe((result : any)=>{console.log(result),this.code = result});
  }


  ratin(book:any):any{
    if(book.rating === 0){
      return false;
    }
    else{
      return true;
    }
    }
    getbooks() : any{
      this.service.getWorkerBooks(this.workerId).subscribe((result : any)=>{console.log(result),this.bookings = result});
  
    }
}
