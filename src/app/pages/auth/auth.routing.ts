import { RouterModule, Routes } from "@angular/router";
import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
  },
];

export const AuthRouting = RouterModule.forChild(routes);
