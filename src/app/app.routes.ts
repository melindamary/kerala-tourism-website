import { Routes } from '@angular/router';
import { DistrictsComponent } from './pages/districts/districts.component';
import { HomeComponent } from './pages/home/home.component';
import { IndividualDistrictComponent } from './pages/individual-district/individual-district.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
    {
        path: "", component:HomeComponent
    },
    {
        path: "districts", component:DistrictsComponent 
    },
    {
        path: "individual-district/:id", component: IndividualDistrictComponent
    },
    {
        path: "login", component:AuthComponent
    },
];
