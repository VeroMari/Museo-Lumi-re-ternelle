import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinturaService } from '../../services/pintura.service';
import { Pintura } from '../../models/pintura.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { PinturaDetalleComponent } from '../../components/pintura-detalle/pintura-detalle.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
imports: [
  CommonModule,
  FormsModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
]

})
export class GaleriaComponent {
  pinturas: Pintura[] = [];

  
constructor(
  private pinturaService: PinturaService,
  private dialog: MatDialog,
  private router: Router
) {
  this.pinturas = this.pinturaService.obtenerPinturas();
}
filtroTexto = '';
filtroEstilo = '';

get pinturasFiltradas(): Pintura[] {
  return this.pinturas.filter(p =>
    (!this.filtroEstilo || p.estilo === this.filtroEstilo) &&
    (!this.filtroTexto || (
      p.titulo.toLowerCase().includes(this.filtroTexto.toLowerCase()) ||
      p.autor.toLowerCase().includes(this.filtroTexto.toLowerCase())
    ))
  );
}

get estilosUnicos(): string[] {
  return [...new Set(this.pinturas.map(p => p.estilo))];
}




verDetalle(pintura: any) {
  this.router.navigate(['/pintura', pintura.id]);
}

}
