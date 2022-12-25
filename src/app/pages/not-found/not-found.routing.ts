import { RouterModule, Routes } from "@angular/router";
import { NotFoundPage } from './not-found.page';

const routes: Routes = [
  {
    path: '',
    component: NotFoundPage,
  },
];

export const NotFoundRouting = RouterModule.forChild(routes);
