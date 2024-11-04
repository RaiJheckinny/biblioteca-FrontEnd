import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'user/auth/signup', component: SignupComponent },
  { path: 'user/auth/login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/user/auth/login' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
