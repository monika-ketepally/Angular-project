import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //isUserLogged: any;
  constructor(private httpClient: HttpClient) { 
   // this.isUserLogged=false;
  }/*
  setUserLoggedIn():void{
    this.isUserLogged=true;
  }
  getUserLogged():any{
    return this.isUserLogged;
  }
  setUserLoggedOut():void{
    this.isUserLogged=false;
  }
  getCountriesList():any{
    return this.httpClient.get('https://restcountries.eu/rest/v2/all');
  }
  getAllEmployees():any{
    return  this.httpClient.get('RESTAPI/webapi/myresource/getAllEmployee');
  }
  getEmp(empId:any):any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getEmployeeById/'+empId);
  }
  registeremp(employee:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/registerEmp', employee);
  }
  deleteemp(employee:any){
    return this.httpClient.delete('RESTAPI/webapi/myresource/deleteEmp/'+employee.empId);
  }
  updateemp(employee:any){
    return this.httpClient.put('RESTAPI/webapi/myresource/updateEmp',employee);
  }
  getAllDepartments():any{
    return  this.httpClient.get('RESTAPI/webapi/myresource/getAllDepartments');
  }*/
  registerCust(customer : any) : any { 
    return this.httpClient.post('views/webapi/myresource/regCustomer' , customer);
  }
  registerSer(service1 : any) : any { 
    return this.httpClient.post('views/webapi/myresource/regService' , service1);
  }
  loginCusto(email:any,password:any):any{
    return this.httpClient.get('views/webapi/myresource/loginCust/' + email + '/'+ password);
  }

  loginService(email:any,password:any):any{
    return this.httpClient.get('views/webapi/myresource/loginSer/' + email + '/'+ password);
  }
  getContainment(address :any):any{
    return this.httpClient.post(' https://data.geoiq.io/dataapis/v1.0/covid/pincodecheck' , address);
    
  }
  PostFile(ImageForm : any,fileToUpload : File){
      const endpoint = 'views/webapi/myresource/uploadImage';
      const formData : FormData = new FormData();
      formData.append('Image',fileToUpload,fileToUpload.name);
      return this.httpClient.post(endpoint,formData);
  }
}
