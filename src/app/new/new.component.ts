import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import{ Location, DatePipe } from '@angular/common';

import { FormBuilder, FormGroup } from '@angular/forms';

declare var jQuery : any;
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  workersAll: any;
  editWorker:any;
  editObj2 : any;
  imageURL: string;
  uploadForm: FormGroup;
  fileToUpload :File = null;
   ser : any;
  reviews : any;
  workers : any;
  currentRate = 0;
  currentRat = 0;
  rev : any;
  books : any;
  employees:any;
  wId : any;
  wMobile : any;
  bId : any;
  wName : any;
  str : any;
  x :any;
  y : any;
  services: any;
  editObject:any;
  editWor : any;
  constructor(public fb: FormBuilder,private service : ServiceService,private location : Location,private datePipe: DatePipe) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    });

    this.editWorker = {workerId: '',aarogyasetustatus : 'green',workerName: '',designation: '',temperature : '',mobile : '',service:{serviceId:this.service.serId}}
    this.service.getWorkers().subscribe((result: any) => {console.log(result),this.workersAll = result});
    this.editObj2 = {workerId: '',aarogyasetustatus : 'green',workerName: '',designation: '',temperature : '',mobile : '',service:{serviceId:this.service.serId}}

    this.imageURL = '/assets/images/';
    this.editObject = {id: '',serviceeName : '',price:'',service:{serviceId:this.service.serId}}
    this.service.getServices().subscribe((result: any) => {console.log(result),this.services = result});
    console.log(this.services);
    this.editWor = {id: '',serviceeName : '',price:'',service:{serviceId:this.service.serId}}
  }

  
 
  ngOnInit(): void {
    //this.ser = this.service.serviceObj;
    this.ser = this.service.serviceObj; 
    this.rev = {reviewId: '',rating:'',review:'',customer:{custId : this.service.custId},service:{serviceId:this.ser.serviceId}}
  //  this.service.getReview(this.ser.serviceId).subscribe((result: any) => {console.log(result),this.reviews = result});
    this.service.getWor().subscribe((result: any) => {console.log(result),this.workers = result});
    this.ser.rating = Number(this.ser.rating);

    this.service.getBooks().subscribe((result: any) => {console.log(result),this.books = result});
    this.service.getWorkers().subscribe((result: any) => {console.log(result),this.employees = result});
    this.x = 0;
    this.y = 0;
   
  }
  ratin(r : any):any{
    this.currentRate = r.rating;
  }
  submit():any{
    this.rev.rating = this.currentRat;
    if(this.service.custId!= null){
      console.log(this.rev);
    this.service.sendReview(this.rev).subscribe((result : any) => console.log(result));
  //  this.service.getReview(this.ser.serviceId).subscribe((result: any) => {console.log(result),this.reviews = result});
    
    }
   // this.service.getReview(this.ser.serviceId).subscribe((result: any) => {console.log(result),this.reviews = result});
//    this.location.back();
  //  this.location.forward();
    }
    
  // Image Preview
  showPreview(event) {
    this.fileToUpload = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: this.fileToUpload
    });
    this.uploadForm.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(this.fileToUpload)
  }

  
  submitIMG(imageForm : any) {
    this.service.PostFile(imageForm,this.fileToUpload).subscribe(data => {console.log('done');
    this.imageURL = '/assets/images/default-png';});
    console.log(this.uploadForm.value);

}
submit2(book : any): any{
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
 this.service.updateBook(book).subscribe((result : any) => {console.log(result)});
 console.log(this.service.custMob);
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
showEditPopup(employee : any) : void{
  this.editObject = employee;
  jQuery('#id02').modal('show');
}

updateEmp() : void{
  this.service.updateSers(this.editObject).subscribe((result:any)=>{console.log(result)});
}
getEmp(employee : any) : void{
  this.editObject = employee;
}
 regSubmit(registrationForm : any){
  //console.log(this.editObject);
 // this.editObject.service.serviceId = this.service1.serId;
  this.service.registerSers(this.editWor).subscribe((result:any)=>{console.log(result)});
  
  console.log(registrationForm.value);
  this.service.getServices().subscribe((result: any) => {console.log(result),this.services = result});
  this.service.getServices().subscribe((result: any) => {console.log(result),this.services = result});
  //this.router.navigate[('home')];
}

deleteEmp(employee : any) : void{
  this.service.deleteSers(employee).subscribe((result : any) => {const i = this.services.findIndex((element) => {return element.workerId === employee.workerId})
  this.services.splice(i , 1);});
  console.log(employee);
 
}


updateWor() : void{
  this.service.updateemp(this.editWorker).subscribe((result:any)=>{console.log(result)});
}

 addWorker(registrationForm : any){
  //console.log(this.editObject);
 // this.editObject.service.serviceId = this.service1.serId;
  this.service.registerWor(this.editObj2).subscribe((result:any)=>{console.log(result)});
  
  console.log(registrationForm.value);
  this.service.getWorkers().subscribe((result: any) => {console.log(result),this.workersAll = result});
  this.service.getWorkers().subscribe((result: any) => {console.log(result),this.workersAll= result});
  //this.router.navigate[('home')];
}

deleteWor(worker : any) : void{
  worker.service.serviceId=1;
  this.service.updateemp(worker).subscribe((result:any)=>{const i = this.workersAll.findIndex((element) => {return element.workerId === worker.workerId})
  this.workersAll.splice(i , 1);
 this.service.getWorkers().subscribe((result: any) => {console.log(result),this.workersAll = result});
 this.service.getWorkers().subscribe((result: any) => {console.log(result),this.workersAll = result});

});

 // this.service.deleteEmp(employee).subscribe((result : any) => {const i = this.employees2.findIndex((element) => {return element.workerId === employee.workerId})
 // this.employees2.splice(i , 1);});
  console.log(worker);
 
}

}