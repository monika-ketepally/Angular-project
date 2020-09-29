import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  isUserLogged: any;
  sharedData : any;
  serviceII : any;
  serId : any;
  serviceObj : any;
  cust : any;
  custId : any;
  uname : any;
  x : any;
  custMob :any;
  cat : any;
  userType : any;
  ser : any;
  tour : any;
  constructor(private httpClient: HttpClient) { 
    this.isUserLogged=false;
  }
  setUserLoggedIn(name):void{
    this.isUserLogged=true;
    this.tour = 0;
    this.uname = name;
  }
  getUserLogged():any{
    return this.isUserLogged;
  }
  setUserLoggedOut():void{
    this.isUserLogged=false;
  }
  
  getUserName():any{
    return this.uname;
  }/*
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
    return this.httpClient.post('viewss/webapi/myresource/regCustomer' , customer , {responseType: 'text'}).toPromise();
  }
  registerSer(service1 : any) : any { 
    return this.httpClient.post('viewss/webapi/myresource/regService' , service1 , {responseType: 'text'}).toPromise();
  }
  registerWor(worker : any) : any{
    return this.httpClient.post('viewss/webapi/myresource/regWorker' , worker);
  }
  registerSers(services : any) : any{
    return this.httpClient.post('viewss/webapi/myresource/regServices' , services);
  }

  bookSer(book : any) : any{
    return this.httpClient.post('viewss/webapi/myresource/bookSer/' + this.x , book);
  }
  loginCusto(email:any,password:any):any{
    return this.httpClient.get('viewss/webapi/myresource/loginCust/' + email + '/'+ password).toPromise();
  }

  loginService(email:any,password:any):any{
    return this.httpClient.get('viewss/webapi/myresource/loginSer/' + email + '/'+ password).toPromise();
  }
  getContainment(address :any):any{
    return this.httpClient.post(' https://data.geoiq.io/dataapis/v1.0/covid/pincodecheck' , address);
    
  }
  PostFile(ImageForm : any,fileToUpload : File){
      const endpoint = 'viewss/webapi/myresource/uploadImage/' + this.serId;
      const formData : FormData = new FormData();
      formData.append('Image',fileToUpload,fileToUpload.name);
      return this.httpClient.post(endpoint,formData);
  }
  getServiceByCat(sharedData : any) : any {
    this.sharedData = sharedData;
    return this.httpClient.get('viewss/webapi/myresource/getServicesByCat/' + this.sharedData);
  }
  getServiceByCity(sharedData : any):any{
    this.sharedData = sharedData;
    return this.httpClient.get('viewss/webapi/myresource/getServicesByCity/' + this.sharedData + '/'+this.cust.city);
  }
  getReview() : any {
    return this.httpClient.get('viewss/webapi/myresource/getReviews/' + this.ser.serviceId);
  }
  getRevieww(serviceId : any) : any {
    return this.httpClient.get('viewss/webapi/myresource/getReviews/' + serviceId);
  }
  getWorkers() : any {
    return this.httpClient.get('viewss/webapi/myresource/getWorkers/' + this.serId);
  }
  getServices() : any {
    return this.httpClient.get('viewss/webapi/myresource/getServices/' + this.serId);
  }
  deleteEmp(employee : any) : any { 
    return this.httpClient.delete('viewss/webapi/myresource/deleteWorker/' + employee.workerId);
  }
  deleteSers(services : any) : any { 
    return this.httpClient.delete('viewss/webapi/myresource/deleteServices/' + services.id);
  }
  updateemp(employee : any) : any { 
    return this.httpClient.put('viewss/webapi/myresource/updateWorker/' , employee);
  }
  updateSers(services : any) : any { 
    return this.httpClient.put('viewss/webapi/myresource/updateServices/' , services);
  }
  updateBook(book : any) : any { 
    return this.httpClient.put('viewss/webapi/myresource/updateBook/' ,book);
  }
  getWor():any{
    return this.httpClient.get('viewss/webapi/myresource/getWorkers/' + this.serviceII);
  }
  getSers() : any {
    return this.httpClient.get('viewss/webapi/myresource/getServices/' + this.serviceII);
  }
  sendReview(rev : any) : any{
    return this.httpClient.post('viewss/webapi/myresource/addReview' , rev);
  }
  getBooks() : any {
    return this.httpClient.get('viewss/webapi/myresource/getBookings/' + this.serId);
  }
  loginCustE(email : any):any{
    return this.httpClient.get('viewss/webapi/myresource/loginCE/' + email).toPromise();
  }
  message(workername:any, workerMob:any,date: any,time : any):any{
    return this.httpClient.get('viewss/webapi/myresource/message/'+workername+'/'+workerMob+'/'+this.custMob+'/'+date+'/'+time+'/'+this.cust.address + '/' + this.uname);
  }
  updateCust(customer : any) : any{
    return this.httpClient.put('viewss/webapi/myresource/updateCust/' ,customer);
  }
  custBooks():any{
    return this.httpClient.get('viewss/webapi/myresource/custBooks/' + this.cust.custId);
  }
  updateSer(service : any) : any{
    return this.httpClient.put('viewss/webapi/myresource/updateSer/' ,service);
  }
  checkTimee(date : any):any{
    return this.httpClient.get('viewss/webapi/myresource/checkTime/' + this.serviceObj.serviceId+'/'+date);
  }
  getAllServices() : any {
    return this.httpClient.get('viewss/webapi/myresource/getAllServices');
  }
  checkCode(code) : any{
    return this.httpClient.get('viewss/webapi/myresource/checkSecretCode/' + code);
  }
  getWorkerBooks(workerId) : any{
    return this.httpClient.get('viewss/webapi/myresource/getWorkerBookings/' + workerId);
  }
  sendOtp(otp:any,mobile:any):any{
    return this.httpClient.get('viewss/webapi/myresource/otp/' + otp+'/'+mobile);

  }
}
