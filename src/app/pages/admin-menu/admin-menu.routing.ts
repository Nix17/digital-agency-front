import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/shared/Guards/auth.guard";
import { AdminAllOrdersTableComponent } from "./admin-all-orders-table/admin-all-orders-table.component";
import { AdminMenuPage } from "./admin-menu.page";
import { EditRefBookComponent } from './edit-ref-book/edit-ref-book.component';
import { OrdersAgreeComponent } from './orders-agree/orders-agree.component';
import { OrdersNotAgreeComponent } from './orders-not-agree/orders-not-agree.component';


const routes: Routes = [
  {
    path: '',
    component: AdminMenuPage,
    children: [
      {
        path: '',
        component: AdminAllOrdersTableComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'refbook/edit',
        component: EditRefBookComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'orders/agree',
        component: OrdersAgreeComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'orders/not-agree',
        component: OrdersNotAgreeComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
    ]
  },
];

export const AdminMenuRouting = RouterModule.forChild(routes);
