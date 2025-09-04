import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './rest-components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // {
  //   path: 'register',
  //   component: RegistrationComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canLoad: [AuthGuard]
  },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    // canLoad: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
