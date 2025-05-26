import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { PinturaDetalleComponent } from './components/pintura-detalle/pintura-detalle.component';   
import { HistoriaComponent } from './menu/historia/historia.component';
import { HorariosComponent } from './horario/horario.component';
import { CollectionsComponent } from './components/colecciones/coleccion.component';
export const routes: Routes = [
  { path: '', component: InicioComponent },

  { path: 'galeria', component: GaleriaComponent },
    { path: 'pintura/:id', component: PinturaDetalleComponent },
     { path: 'historia', component: HistoriaComponent },
  { path: 'horarios', component: HorariosComponent },
 { path: 'colecciones', component: CollectionsComponent },
 
];
