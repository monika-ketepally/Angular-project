/*import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service.service';
import{ Location, DatePipe } from '@angular/common';

import { FormBuilder, FormGroup } from '@angular/forms';
import { GuidedTour, Orientation } from 'projects/ngx-guided-tour/src/lib/guided-tour.constants';
import { GuidedTourService } from 'projects/ngx-guided-tour/src/lib/guided-tour.service';

declare var jQuery : any;
@Component({
  selector: 'app-sercom',
  templateUrl: './sercom.component.html',
  styleUrls: ['./sercom.component.css']
})
export class SercomComponent implements OnInit {
  ser : any;
  uploadForm: FormGroup;
  fileToUpload :File = null;
  imageURL: string;
  reviews : any;
  currentRate: any;
  currentRat: any;
  workers: any;
  updateW:any;
  addW : any;
  servicea : any;
  services :any;
  editSer : any;
  books : any;
  employees:any;
  wId : any;
  wMobile : any;
  bId : any;
  wName : any;
  str : any;
  constructor(public fb: FormBuilder,private service : ServiceService,private location : Location,private guidedTourService: GuidedTourService,private datePipe: DatePipe) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    });
    this.imageURL = '/assets/images/';
   this.updateW = {workerId: '',aarogyasetustatus : 'green',workerName: '',designation: '',temperature : '',mobile : '',service:{serviceId:this.service.serId}}
    this.service.getWorkers().subscribe((result: any) => {console.log(result),this.workers = result});
    this.addW = {workerId: '',aarogyasetustatus : 'green',workerName: '',designation: '',temperature : '',mobile : '',service:{serviceId:this.service.serId}}
    this.servicea = {id: '',serviceeName : '',price:'',service:{serviceId:this.service.serId}}
    this.service.getServices().subscribe((result: any) => {console.log(result),this.services = result});
    console.log(this.services);
    this.editSer = {id: '',serviceeName : '',price:'',service:{serviceId:this.service.serId}}
    setTimeout(() => {
      this.guidedTourService.startTour(this.dashboardTour);
  }, 1000);
   }

  ngOnInit(): void {
    this.ser = this.service.ser;
    this.service.getReview().subscribe((result: any) => {console.log(result),this.reviews = result});
    this.service.getBooks().subscribe((result: any) => {console.log(result),this.books = result});
    this.service.getWorkers().subscribe((result: any) => {console.log(result),this.employees = result});
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

//RATINGS AND REVIEWS
ratin(r : any):any{
  this.currentRate = r.rating;
}

//WORKERS
updateWorker() : void{
  this.service.updateemp(this.updateW).subscribe((result:any)=>{console.log(result)});
}
getWor(worker : any) : void{
  this.updateW = worker;
}
 addWorker(registrationForm : any){
  //console.log(this.editObject);
 // this.editObject.service.serviceId = this.service1.serId;
  this.service.registerWor(this.addW).subscribe((result:any)=>{console.log(result)});
  
  console.log(registrationForm.value);
  this.service.getWorkers().subscribe((result: any) => {console.log(result),this.workers = result});
  this.service.getWorkers().subscribe((result: any) => {console.log(result),this.workers = result});
  //this.router.navigate[('home')];
}
deleteWor(worker : any) : void{
  worker.service.serviceId = 1;
  this.service.updateemp(worker).subscribe((result : any) => {const i = this.workers.findIndex((element) => {return element.workerId === worker.workerId})
  this.workers.splice(i , 1);});
  console.log(worker);
 
}

//SERVICES
addService(registrationForm : any){
  //console.log(this.editObject);
 // this.editObject.service.serviceId = this.service1.serId;
  this.service.registerSers(this.servicea).subscribe((result:any)=>{console.log(result)});
  
  console.log(registrationForm.value);
  this.service.getServices().subscribe((result: any) => {console.log(result),this.services = result});
  this.service.getServices().subscribe((result: any) => {console.log(result),this.services = result});
  //this.router.navigate[('home')];
}
deleteSer(employee : any) : void{
  this.service.deleteSers(employee).subscribe((result : any) => {const i = this.services.findIndex((element) => {return element.id === employee.id})
  this.services.splice(i , 1);});
  console.log(employee);
 
}
getSer(servicec : any) : void{
  this.editSer = servicec;
}
updateSer() : void{
  this.service.updateSers(this.editSer).subscribe((result:any)=>{console.log(result)});
}
//BOOKINGS
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
 this.service.updateBook(book).subscribe((result : any) => {console.log(result)});
 console.log(this.service.custMob);
 //this.service1.message(this.wName,this.wMobile,this.str,book.time).subscribe((result : any) => {console.log(result)});
}

check(emp : any):boolean{
    if(emp.worker.workerId === 1){
      return false;
    }
    else{
      return true;
    }
}
ratinn(r : any):any{
  this.currentRat = r.rating;
}

public dashboardTour: GuidedTour = {
  tourId: 'purchases-tour',
  useOrb: true,
  steps: [
      {
          title: 'Hi!Welcome to VIEWS',
          selector: '.demo-title',
          content: 'Lets take a quick tour.', 
          orientation: Orientation.Bottom
      },
     // {
    //      title: 'General page step',
     //     content: 'We have the concept of general page steps so that a you can introuce a user to a page or non specific instructions',
    //  },
      {
          title: 'Upload Your Logo here',
          selector: '.logo',
          content: '',
          orientation: Orientation.Left
      },
     
      {
          title: 'Manage your Service here',
          selector: '.reviewss',
          content: '<table><thead><th>Customer Reviews&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Worker details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Services you provide&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Bookings</th></thead><tbody><td><span style = "color : grey;margin-left: 45px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x21e3;</span></td><td><span style = "color : grey;margin-left : 45px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x21e3;</span></td><td> <span style = "color : grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x21e3;</span></td><td><span style = "color : grey;height:60px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x21e3;</span></td></tbody></table>',
          orientation: Orientation.Top
      },
     
  ]
};
tour():any{
  if(this.service.tour === 0){
    this.service.tour = 1;
    return true;
  }
  else{
    return false;
  }
}

}*/
import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service.service';
import{ Location, DatePipe } from '@angular/common';

import { FormBuilder, FormGroup } from '@angular/forms';
import { GuidedTour, Orientation } from 'projects/ngx-guided-tour/src/lib/guided-tour.constants';
import { GuidedTourService } from 'projects/ngx-guided-tour/src/lib/guided-tour.service';
import { Router } from '@angular/router';

declare var jQuery : any;
@Component({
selector: 'app-sercom',
templateUrl: './sercom.component.html',
styleUrls: ['./sercom.component.css']
})
export class SercomComponent implements OnInit {
ser : any;
uploadForm: FormGroup;
fileToUpload :File = null;
imageURL: string;
reviews : any;
currentRate: any;
currentRat: any;
value : any;
workers: any;
updateW:any;
addW : any;
servicea : any;
services :any;
editSer : any;
today : any;
books : any;
employees:any;
wId : any;
wMobile : any;
bId : any;
wName : any;
str : any;
i : any;
timeBooks = [];
week : any;
month : any;
year : any;
upload : boolean;
constructor(public fb: FormBuilder,private router: Router,private service : ServiceService,private location : Location,private guidedTourService: GuidedTourService,private datePipe: DatePipe) {
this.uploadForm = this.fb.group({
avatar: [null],
name: ['']
});
this.imageURL = '/assets/images/';
this.updateW = {workerId: '',aarogyasetustatus : 'green',workerName: '',designation: '',temperature : '',mobile : '',service:{serviceId:this.service.serId},gender : ""}
this.service.getWorkers().subscribe((result: any) => {console.log(result),this.workers = result});
this.addW = {workerId: '',aarogyasetustatus : 'green',workerName: '',designation: '',temperature : '',mobile : '',service:{serviceId:this.service.serId},gender : ""}
this.servicea = {id: '',serviceeName : '',price:'',service:{serviceId:this.service.serId}}
this.service.getServices().subscribe((result: any) => {console.log(result),this.services = result});
console.log(this.services);
this.editSer = {id: '',serviceeName : '',price:'',service:{serviceId:this.service.serId}}
setTimeout(() => {
this.guidedTourService.startTour(this.dashboardTour);
}, 1000);

this.today = new Date();
this.week = new Date();
this.month = new Date();
this.year = new Date();
this.week.setDate(this.today.getDate() - 7);
this.month.setDate(this.today.getDate() - 31);
this.year.setDate(this.today.getDate() - 365);
this.today = this.datePipe.transform(this.today,'yyyy-MM-dd');
this.week = this.datePipe.transform(this.week,'yyyy-MM-dd');
this.month = this.datePipe.transform(this.month,'yyyy-MM-dd');
this.year = this.datePipe.transform(this.year,'yyyy-MM-dd');
//this.imageURL = "/assets/images/"+this.ser.imageName;
this.upload = false;
}

ngOnInit(): void {
this.ser = this.service.ser;
this.service.getReview().subscribe((result: any) => {console.log(result),this.reviews = result});
this.service.getBooks().subscribe((result: any) => {console.log(result),this.books = result,this.timeBooks = result});
this.service.getWorkers().subscribe((result: any) => {console.log(result),this.employees = result});
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
  this.service.ser.imageName = this.fileToUpload.name;
this.service.PostFile(imageForm,this.fileToUpload).subscribe(data => {console.log('done');});
//this.imageURL = '/assets/images/default-png';
console.log(this.imageURL);
console.log(this.imageURL)
this.upload = true;
this.router.navigate(['sercom']);
}

refresh() : any{
  return this.upload;
}

//RATINGS AND REVIEWS
ratin(r : any):any{
this.currentRate = r.rating;
}

//WORKERS
updateWorker() : void{
this.service.updateemp(this.updateW).subscribe((result:any)=>{console.log(result)});
}
getWor(worker : any) : void{
this.updateW = worker;
}
addWorker(registrationForm : any){
//console.log(this.editObject);
// this.editObject.service.serviceId = this.service1.serId;
this.addW.rating = 5;
this.service.registerWor(this.addW).subscribe((result:any)=>{console.log(result)});

console.log(registrationForm.value);
this.service.getWorkers().subscribe((result: any) => {console.log(result),this.workers = result});
this.service.getWorkers().subscribe((result: any) => {console.log(result),this.workers = result});
this.addW = {workerId: '',aarogyasetustatus : 'green',workerName: '',designation: '',temperature : '',mobile : '',service:{serviceId:this.service.serId},gender : ""}
//this.router.navigate[('home')];
}
deleteWor(worker : any) : void{
worker.service.serviceId = 1;
this.service.updateemp(worker).subscribe((result : any) => {const i = this.workers.findIndex((element) => {return element.workerId === worker.workerId})
this.workers.splice(i , 1);});
console.log(worker);

}

//SERVICES
addService(registrationForm : any){
//console.log(this.editObject);
// this.editObject.service.serviceId = this.service1.serId;
this.service.registerSers(this.servicea).subscribe((result:any)=>{console.log(result)});

console.log(registrationForm.value);
this.service.getServices().subscribe((result: any) => {console.log(result),this.services = result});
this.service.getServices().subscribe((result: any) => {console.log(result),this.services = result});
//this.router.navigate[('home')];
this.servicea = {id: '',serviceeName : '',price:'',service:{serviceId:this.service.serId}}

}
deleteSer(employee : any) : void{
this.service.deleteSers(employee).subscribe((result : any) => {const i = this.services.findIndex((element) => {return element.id === employee.id})
this.services.splice(i , 1);});
console.log(employee);

}
getSer(servicec : any) : void{
this.editSer = servicec;
}
updateSer() : void{
this.service.updateSers(this.editSer).subscribe((result:any)=>{console.log(result)});
}


time():any{
  this.i = 0;
  console.log(this.value);
  this.timeBooks = [];
  if(this.value === "Today"){
    this.books.forEach(element => {
      if(element.date === this.today){
        this.timeBooks.push(element);
        this.i = this.i + 1;
      }
      
    });
  }
  else if(this.value === "Last one week"){
    this.books.forEach(element => {
      if(element.date >= this.week && element.date <= this.today){
        this.timeBooks.push(element);
        this.i = this.i + 1;
      }
    });
  }
  else if(this.value === "Last one month"){
    this.books.forEach(element => {
      if(element.date >= this.month && element.date <= this.today){
        this.timeBooks.push(element);
        this.i = this.i + 1;
      }
    });
  }
  else if(this.value === "Last one year"){
    this.books.forEach(element => {
      if(element.date >= this.year && element.date <= this.today){
        this.timeBooks.push(element);
        this.i = this.i + 1;
      }
    });
  }
  else{
    this.timeBooks = this.books;
  }
}


//BOOKINGS
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
this.service.updateBook(book).subscribe((result : any) => {console.log(result)});
console.log(this.service.custMob);
//this.service1.message(this.wName,this.wMobile,this.str,book.time).subscribe((result : any) => {console.log(result)});
}

check(emp : any):boolean{
if(emp.worker.workerId === 1){
return false;
}
else{
return true;
}
}
ratinn(r : any):any{
this.currentRat = r.rating;
}

public dashboardTour: GuidedTour = {
tourId: 'purchases-tour',
useOrb: true,
steps: [
{
title: 'Hi!Welcome to VIEWS',
selector: '.demo-title',
content: 'Lets take a quick tour.',
orientation: Orientation.Bottom
},
// {
// title: 'General page step',
// content: 'We have the concept of general page steps so that a you can introuce a user to a page or non specific instructions',
// },
{
title: 'Upload Your Logo here',
selector: '.logo',
content: '',
orientation: Orientation.Left
},

{
title: 'Manage your Service here',
selector: '.reviewss',
content: '<table><thead><th>Customer Reviews&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Worker details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Services you provide&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Bookings</th></thead><tbody><td><span style = "color : grey;margin-left: 45px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x21e3;</span></td><td><span style = "color : grey;margin-left : 45px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x21e3;</span></td><td> <span style = "color : grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x21e3;</span></td><td><span style = "color : grey;height:60px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x21e3;</span></td></tbody></table>',
orientation: Orientation.Top
},

]
};
tour():any{
if(this.service.tour === 0){
this.service.tour = 1;
return true;
}
else{
return false;
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