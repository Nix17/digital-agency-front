import { RouterModule, Routes } from "@angular/router";
import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
];

export const ProfileRouting = RouterModule.forChild(routes);
