import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { Error404Component } from './components/error/error404.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'celulares/:id', component: DetallesComponent },
  { path: 'error404', component: Error404Component },
  { path: 'agregar', component: AgregarComponent },
  { path: 'nosotros', component: NosotrosComponent },
  {
    path: '**',
    redirectTo: 'error404',
    pathMatch: 'full',
  },
];
