import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AuthPage } from './pages/auth/auth.page';
import { ProfilePage } from './pages/profile/profile.page';
import { AdminMenuPage } from './pages/admin-menu/admin-menu.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: []
  },
  {
    path: 'auth',
    component: AuthPage
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: []
  },
  {
    path: 'admin-menu',
    component: AdminMenuPage,
    canActivate: []
  },
  {
    path: '**',
    component: NotFoundPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
