import { RouterModule, Routes } from "@angular/router";
import { ProfilePage } from './profile.page';
import { OrderInfoComponent } from './order-info/order-info.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { AuthGuard } from '../../shared/Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children: [
      {
        path: '',
        component: ProfileInfoComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'orders',
        component: OrderInfoComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
      }
    ],
  },
];

export const ProfileRouting = RouterModule.forChild(routes);
