import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PageOneComponent, PageTwoComponent, SecureComponent, LoginComponent } from './app.component';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

}

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {
    path: "secure", component: SecureComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "page1", component: PageOneComponent },
      { path: "page2", component: PageTwoComponent },
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
