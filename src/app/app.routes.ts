import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { PinturaDetalleComponent } from './components/pintura-detalle/pintura-detalle.component';   

export const routes: Routes = [
  { path: '', component: InicioComponent },

  { path: 'galeria', component: GaleriaComponent },
    { path: 'pintura/:id', component: PinturaDetalleComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'acerca', component: AcercaComponent }
];
