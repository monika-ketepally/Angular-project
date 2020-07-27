import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RegServiceComponent } from './reg-service/reg-service.component';
import { LoginServiceComponent } from './login-service/login-service.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SalonComponent } from './salon/salon.component';
import { CovidComponent } from './covid/covid.component';
import { ServiceHPComponent } from './service-hp/service-hp.component';
import { ShowempComponent } from './showemp/showemp.component';
import { TrialComponent } from './trial/trial.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const appRoot:Routes=[{path:'', component: HomeComponent},
{path:'login', component: LoginComponent},
{path:'register',  component: RegisterComponent},
{path:'reg-service',  component: RegServiceComponent},
{path:'login-service',component : LoginServiceComponent},
{path:'home',component:HomeComponent},
{path:'salon',component:SalonComponent},
{path:'covid',component:CovidComponent},
{path:'service-hp',component:ServiceHPComponent},];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    RegServiceComponent,
    LoginServiceComponent,
    HomeComponent,
    FooterComponent,
    SalonComponent,
    CovidComponent,
    ServiceHPComponent,
    ShowempComponent,
    TrialComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoot) , 
    ReactiveFormsModule, NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
