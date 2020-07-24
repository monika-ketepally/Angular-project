import { Component, OnInit } from '@angular/core';
declare var jQuery : any;
@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {
  employees: any;
   editObject:any;
  constructor() {
    this.editObject = {empId: '',empName: '',designation: '',temperature : '',mobile : ''};

    this.employees = [{empId: 100, empName: 'PASHA', designation: 'Electrician', temperature: '38F',mobile: '9891111111'},
  {empId: 101, empName: 'INDIRA', designation: 'Electrician', temperature: '37F',mobile: '9652324155'},
  {empId: 102, empName: 'HARSHA', designation: 'Electrician', temperature: '36F',mobile: '8790573732'},
  {empId: 103, empName: 'VENKAT', designation: 'Electrician', temperature: '39F',mobile: '9100574274'}];

}

  ngOnInit(): void {
  }
  showEditPopup(employee : any) : void{
    this.editObject = employee;
    jQuery('#empModal').modal('show');
  }
}
