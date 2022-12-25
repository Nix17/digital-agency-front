import { RouterModule, Routes } from "@angular/router";
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];

export const HomeRouting = RouterModule.forChild(routes);
