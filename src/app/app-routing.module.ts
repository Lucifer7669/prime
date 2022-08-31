import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { Auth } from './authGuard/auth';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'accounts',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [Auth],
  },
  {
    path: 'accounts',
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [Auth],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Auth],
})
export class AppRoutingModule {}
