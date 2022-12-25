import { RouterModule, Routes } from "@angular/router";
import { AdminMenuPage } from "./admin-menu.page";

const routes: Routes = [
  {
    path: '',
    component: AdminMenuPage,
  },
];

export const AdminMenuRouting = RouterModule.forChild(routes);
