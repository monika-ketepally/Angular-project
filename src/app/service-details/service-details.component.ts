import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
declare var jQuery : any;
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  employees: any;
  editObject:any;
  editObj : any;
  constructor(private service1 : ServiceService,private router:Router) { 
    this.editObject = {id: '',serviceeName : '',price:'',service:{serviceId:this.service1.serId}}
    this.service1.getServices().subscribe((result: any) => {console.log(result),this.employees = result});
    console.log(this.employees);
    this.editObj = {id: '',serviceeName : '',price:'',service:{serviceId:this.service1.serId}}
   // this.employees = [{empId: 100, empName: 'Harshitha', designation: 'Stylist', temperature: '38F',mobile: '9891111111'},];
  }

  ngOnInit(): void {
    }
  showEditPopup(employee : any) : void{
    this.editObject = employee;
    jQuery('#id02').modal('show');
  }

  updateEmp() : void{
    this.service1.updateSers(this.editObject).subscribe((result:any)=>{console.log(result)});
  }
  getEmp(employee : any) : void{
    this.editObject = employee;
  }
   regSubmit(registrationForm : any){
    //console.log(this.editObject);
   // this.editObject.service.serviceId = this.service1.serId;
    this.service1.registerSers(this.editObj).subscribe((result:any)=>{console.log(result)});
    
    console.log(registrationForm.value);
    this.service1.getServices().subscribe((result: any) => {console.log(result),this.employees = result});
    this.service1.getServices().subscribe((result: any) => {console.log(result),this.employees = result});
    //this.router.navigate[('home')];
  }
  deleteEmp(employee : any) : void{
    this.service1.deleteSers(employee).subscribe((result : any) => {const i = this.employees.findIndex((element) => {return element.workerId === employee.workerId})
    this.employees.splice(i , 1);});
    console.log(employee);
   
  }
}
