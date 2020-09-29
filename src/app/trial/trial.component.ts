import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
selector: 'app-trial',
templateUrl: './trial.component.html',
styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
services : any;
b : boolean;
ser :any
searchString: string;
constructor(private router: Router,private service : ServiceService) {
this.service.getAllServices().subscribe((result: any) => {console.log(result),this.services = result});
this.b = false;

}

ngOnInit(): void {
}
slideActivate(ngbSlideEvent: NgbSlideEvent) {
console.log(ngbSlideEvent.source);
console.log(ngbSlideEvent.paused);
console.log(NgbSlideEventSource.INDICATOR);
console.log(NgbSlideEventSource.ARROW_LEFT);
console.log(NgbSlideEventSource.ARROW_RIGHT);
}
onclick() : any{
this.b = true;
}
choose(cat : any):any{
this.service.cat = cat;
this.router.navigate(['services']);
}
search(s : any):any{
this.service.serviceObj = s;
}
}