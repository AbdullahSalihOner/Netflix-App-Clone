import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "", redirectTo: "landing", pathMatch: "full"},
    {path: "register", component: RegisterComponent},
    {path: "home", component: HomePageComponent},
    {path: "landing", component: LandingPageComponent}

];
