import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavgationComponent } from './navgation/navgation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CorporateComponent } from './registration/corporate/corporate.component';
import { CollegeComponent } from './registration/college/college.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavgationComponent,
    CorporateComponent,
    CollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
