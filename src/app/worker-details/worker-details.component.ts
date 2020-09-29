import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.css']
})
export class WorkerDetailsComponent implements OnInit {
  employees: any;
  editObject:any;
  editObj : any;
  constructor(private service1 : ServiceService,private router:Router) { 
    this.editObject = {workerId: '',aarogyasetustatus : 'green',workerName: '',designation: '',temperature : '',mobile : '',service:{serviceId:this.service1.serId}}
    this.service1.getWorkers().subscribe((result: any) => {console.log(result),this.employees = result});
    this.editObj = {workerId: '',aarogyasetustatus : 'green',workerName: '',designation: '',temperature : '',mobile : '',service:{serviceId:this.service1.serId}}
   // this.employees = [{empId: 100, empName: 'Harshitha', designation: 'Stylist', temperature: '38F',mobile: '9891111111'},];
  }

  ngOnInit(): void {
    }

  updateEmp() : void{
    this.service1.updateemp(this.editObject).subscribe((result:any)=>{console.log(result)});
  }
  getEmp(employee : any) : void{
    this.editObject = employee;
  }
   regSubmit(registrationForm : any){
    //console.log(this.editObject);
   // this.editObject.service.serviceId = this.service1.serId;
    this.service1.registerWor(this.editObj).subscribe((result:any)=>{console.log(result)});
    
    console.log(registrationForm.value);
    this.service1.getWorkers().subscribe((result: any) => {console.log(result),this.employees = result});
    this.service1.getWorkers().subscribe((result: any) => {console.log(result),this.employees = result});
    //this.router.navigate[('home')];
  }
  deleteEmp(employee : any) : void{
    this.service1.deleteEmp(employee).subscribe((result : any) => {const i = this.employees.findIndex((element) => {return element.workerId === employee.workerId})
    this.employees.splice(i , 1);});
    console.log(employee);
   
  }

}
