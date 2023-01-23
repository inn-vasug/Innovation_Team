import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CollegeComponent } from './registration/college/college.component';
import { CorporateComponent } from './registration/corporate/corporate.component';

const routes: Routes = [
  { path: 'Register-College', component: CollegeComponent },
  { path: 'Register-Corporate', component: CorporateComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
