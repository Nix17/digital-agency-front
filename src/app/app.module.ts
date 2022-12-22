import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/Modules/shared.module';
import { AuthPage } from './pages/auth/auth.page';
import { HomePage } from './pages/home/home.page';
import { ProfilePage } from './pages/profile/profile.page';
import { AdminMenuPage } from './pages/admin-menu/admin-menu.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { TotalSiteHostComponent } from './pages/home/total-site-host/total-site-host.component';
import { AuthFormComponent } from './pages/auth/auth-form/auth-form.component';
import { RegFormComponent } from './pages/auth/reg-form/reg-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPage,
    HomePage,
    ProfilePage,
    AdminMenuPage,
    NotFoundPage,
    TotalSiteHostComponent,
    AuthFormComponent,
    RegFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
