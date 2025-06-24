import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CelularesComponent } from './components/celulares/celulares.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { Error404Component } from './components/error/error404.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ModificarComponent } from './components/modificar/modificar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'celulares', component: CelularesComponent },
  { path: 'celulares/:id', component: DetallesComponent },
  { path: 'modificar/:id', component: ModificarComponent },
  { path: 'error404', component: Error404Component },
  { path: 'agregar', component: AgregarComponent },
  { path: 'nosotros', component: NosotrosComponent },
  {
    path: '**',
    redirectTo: 'error404',
    pathMatch: 'full',
  },
];