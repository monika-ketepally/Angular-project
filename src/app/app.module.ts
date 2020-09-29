import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SalonComponent } from './salon/salon.component';
import { CovidComponent } from './covid/covid.component';
import { ServiceHPComponent } from './service-hp/service-hp.component';
import { TrialComponent } from './trial/trial.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlipComponent } from './flip/flip.component';
import { RegproComponent } from './regpro/regpro.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ServicesComponent } from './services/services.component';
import { OneServiceComponent } from './one-service/one-service.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { UpdatecustComponent } from './updatecust/updatecust.component';
import{ Location } from '@angular/common';
import { NgpSortModule } from "ngp-sort-pipe";
import { CustBookingsComponent } from './cust-bookings/cust-bookings.component';
import { UpdateSerComponent } from './update-ser/update-ser.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NewComponent } from './new/new.component';
import { SercomComponent } from './sercom/sercom.component';
import { SearchComponent } from './search/search.component';
import { GuidedTourModule } from 'projects/ngx-guided-tour/src/lib/guided-tour.module';
import { FilterPipe } from './filter.pipe';
import { CustreviewComponent } from './custreview/custreview.component';


const appRoot:Routes=[{path:'', component: TrialComponent},
{path:'cust-review',component:CustreviewComponent},
{path:'flip', component: FlipComponent},
{path:'trial', component: TrialComponent},
{path:'salon',component:SalonComponent},
{path:'covid',component:CovidComponent},
{path:'services',component:ServicesComponent},
{path:'service-hp',component:ServiceHPComponent},
{path:'regpro',component:RegproComponent},
{path:'services/one-service',component:OneServiceComponent},
{path:'one-service',component:OneServiceComponent},
{path:'trial/one-service',component:OneServiceComponent},
{path:'service-hp/worker-details',component:WorkerDetailsComponent},
{path:'service-hp/service-details',component:ServiceDetailsComponent},
{path:'services/one-service/book',component:BookComponent},
{path:'contact',component:ContactComponent},
{path:'updatecust',component:UpdatecustComponent},
{path:'update-ser',component:UpdateSerComponent},
{path:'cust-bookings',component:CustBookingsComponent},
{path:'sercom',component:SercomComponent},
{path:'book',component:BookComponent},
{path:'service-hp/bookings',component:BookingsComponent}];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SalonComponent,
    CovidComponent,
    ServiceHPComponent,
    TrialComponent,
    FlipComponent,
    RegproComponent,
    ServicesComponent,
    OneServiceComponent,
    WorkerDetailsComponent,
    ServiceDetailsComponent,
    BookComponent,
    ContactComponent,
    BookingsComponent,
    UpdatecustComponent,
    CustBookingsComponent,
    UpdateSerComponent,
    FeedbackComponent,
    NewComponent,
    SercomComponent,
    SearchComponent,
    FilterPipe,
    CustreviewComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoot) , 
    ReactiveFormsModule, NoopAnimationsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ToastrModule.forRoot(),
    NgpSortModule,
    GuidedTourModule.forRoot()

  ],
  providers: [DatePipe,
    Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
