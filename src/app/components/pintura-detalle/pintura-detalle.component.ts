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
  },
  {
    id: '3',
    titulo: 'La Gioconda (Mona Lisa)',
    autor: 'Leonardo da Vinci',
    anio: 1503,
    estilo: 'Renacimiento',
    descripcion: 'El retrato más famoso de la historia del arte.',
    tecnica: 'Óleo sobre tabla de álamo',
    detalles: 'Actualmente en el Museo del Louvre, París. Notable por su enigmática sonrisa.',
    imagen: 'assets/pinturas/monalisa.jpg'
  },
  {
    id: '4',
    titulo: 'El grito',
    autor: 'Edvard Munch',
    anio: 1893,
    estilo: 'Expresionismo',
    descripcion: 'Representación icónica de la angustia existencial.',
    tecnica: 'Óleo, temple y pastel sobre cartón',
    detalles: 'Existen cuatro versiones autorizadas por el artista.',
    imagen: 'assets/pinturas/elGrito.png'
  },
  {
    id: '5',
    titulo: 'Las meninas',
    autor: 'Diego Velázquez',
    anio: 1656,
    estilo: 'Barroco',
    descripcion: 'Obra maestra de la pintura española.',
    tecnica: 'Óleo sobre lienzo',
    detalles: 'Representa a la infanta Margarita y su séquito en el taller del artista.',
    imagen: 'assets/pinturas/LasMeninas.jpg'
  },
  {
    id: '6',
    titulo: 'La persistencia de la memoria',
    autor: 'Salvador Dalí',
    anio: 1931,
    estilo: 'Surrealismo',
    descripcion: 'Conocida por sus relojes derretidos.',
    tecnica: 'Óleo sobre lienzo',
    detalles: 'Actualmente en el MoMA de Nueva York.',
    imagen: 'assets/pinturas/memoria.png'
  },
  {
    id: '7',
    titulo: 'Guernica',
    autor: 'Pablo Picasso',
    anio: 1937,
    estilo: 'Cubismo',
    descripcion: 'Representación del bombardeo de Guernica durante la Guerra Civil española.',
    tecnica: 'Óleo sobre lienzo',
    detalles: 'Obra de gran tamaño (3,5 x 7,8 m) en blanco y negro.',
    imagen: 'assets/pinturas/guernica.jpg'
  },
  {
    id: '8',
    titulo: 'La creación de Adán',
    autor: 'Miguel Ángel',
    anio: 1512,
    estilo: 'Renacimiento',
    descripcion: 'Fresco de la Capilla Sixtina.',
    tecnica: 'Pintura al fresco',
    detalles: 'Representa el pasaje bíblico del Génesis.',
    imagen: 'assets/pinturas/creacionAdam.jpg'
  },
  {
    id: '9',
    titulo: 'La joven de la perla',
    autor: 'Johannes Vermeer',
    anio: 1665,
    estilo: 'Barroco',
    descripcion: 'Conocida como la "Mona Lisa del Norte".',
    tecnica: 'Óleo sobre lienzo',
    detalles: 'No es un retrato real sino un "tronie" (estudio de expresión).',
    imagen: 'assets/pinturas/perla.jpg'
  },
  {
    id: '10',
    titulo: 'El nacimiento de Venus',
    autor: 'Sandro Botticelli',
    anio: 1485,
    estilo: 'Renacimiento',
    descripcion: 'Representa a Venus emergiendo del mar.',
    tecnica: 'Temple sobre lienzo',
    detalles: 'Una de las primeras pinturas no religiosas de gran tamaño.',
    imagen: 'assets/pinturas/venus.jpg'
  },
  {
    id: '11',
    titulo: 'La ronda de noche',
    autor: 'Rembrandt van Rijn',
    anio: 1642,
    estilo: 'Barroco',
    descripcion: 'Retrato grupal de la milicia cívica de Ámsterdam.',
    tecnica: 'Óleo sobre lienzo',
    detalles: 'Originalmente más claro, oscurecido por barnices con el tiempo.',
    imagen: 'assets/pinturas/rondaNoche.jpg'
  },
  {
    id: '12',
    titulo: 'El jardín de las delicias',
    autor: 'El Bosco',
    anio: 1505,
    estilo: 'Prerrenacimiento',
    descripcion: 'Tríptico que representa el Paraíso, la Tierra y el Infierno.',
    tecnica: 'Óleo sobre tabla',
    detalles: 'Lleno de simbolismos y criaturas fantásticas.',
    imagen: 'assets/pinturas/delicias.avif'
  }
];
    this.pintura = pinturas.find(p => p.id === id);
  }
}