import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/Guards/auth.guard';
import { NotAuthGuard } from './shared/Guards/not-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    pathMatch: 'full',
    canActivate: [NotAuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-menu',
    loadChildren: () => import('./pages/admin-menu/admin-menu.module').then(m => m.AdminMenuModule),
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
