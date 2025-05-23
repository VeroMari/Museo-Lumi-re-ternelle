import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Angular Material standalone imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pintura-detalle',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './pintura-detalle.component.html',
  styleUrls: ['./pintura-detalle.component.scss']
})
export class PinturaDetalleComponent implements OnInit {
  pintura: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // Simulación de datos (puedes reemplazar por servicio real)
    const pinturas = [
      {
        id: '1',
        titulo: 'La noche estrellada',
        autor: 'Vincent van Gogh',
        anio: 1889,
        estilo: 'Postimpresionismo',
        descripcion: 'Una de las obras más famosas del arte europeo.',
        tecnica: 'Óleo sobre lienzo',
        detalles: 'Pintado desde la habitación del artista en Saint-Rémy-de-Provence.',
        imagen: 'assets/pinturas/van-gogh.jpg'
      },
      {
        id: '2',
        titulo: 'Impresión, sol naciente',
        autor: 'Claude Monet',
        anio: 1872,
        estilo: 'Impresionismo',
        descripcion: 'Pintura que dio origen al movimiento impresionista.',
        tecnica: 'Pintura al óleo',
        detalles: 'Fue expuesta por primera vez en 1874 en la exposición de los impresionistas.',
        imagen: 'assets/pinturas/monet.jpg'
      }
    ];

    this.pintura = pinturas.find(p => p.id === id);
  }
}