// collections.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { CollectionDetailDialogComponent } from './detallesColeccion/detallesColeccion.component';

interface Collection {
  id: number;
  title: string;
  description: string;
  image: string;
  period: string;
  numberOfItems: number;
  featuredArtworks: string[];
}

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.scss']
})
export class CollectionsComponent {
  collections: Collection[] = [
    {
      id: 1,
      title: 'Arte Renacentista',
      description: 'Obras maestras del Renacimiento europeo',
      image: 'assets/coleccion/renacimiento.jpg',
      period: 'Siglos XV-XVI',
      numberOfItems: 45,
      featuredArtworks: ['La Gioconda', 'La creación de Adán', 'El nacimiento de Venus']
    },
    {
      id: 2,
      title: 'Impresionismo Francés',
      description: 'La revolución de la luz y el color',
      image: 'assets/coleccion/impresionismo.jpg',
      period: 'Siglo XIX',
      numberOfItems: 32,
      featuredArtworks: ['Impresión, sol naciente', 'Nenúfares', 'Almuerzo sobre la hierba']
    },
    {
      id: 3,
      title: 'Arte Moderno',
      description: 'Movimientos vanguardistas del siglo XX',
      image: 'assets/coleccion/varo.webp',
      period: 'Siglo XX',
      numberOfItems: 28,
      featuredArtworks: ['Guernica', 'La persistencia de la memoria', 'Composición VIII']
    },
    {
      id: 4,
      title: 'Arte Barroco',
      description: 'El drama y la exuberancia del Barroco',
      image: 'assets/coleccion/barroco1.jpg',
      period: 'Siglos XVII-XVIII',
      numberOfItems: 37,
      featuredArtworks: ['Las meninas', 'La ronda de noche', 'El éxtasis de Santa Teresa']
    },
    {
      id: 5,
      title: 'Arte Oriental',
      description: 'Tesoros del arte asiático',
      image: 'assets/coleccion/oriental.jpeg',
      period: 'Siglos V-XIX',
      numberOfItems: 52,
      featuredArtworks: ['La gran ola de Kanagawa', 'Paisaje de otoño', 'Retrato de la emperatriz']
    },
    {
      id: 6,
      title: 'Arte Contemporáneo',
      description: 'Expresiones artísticas actuales',
      image: 'assets/coleccion/contemporaneo.avif',
      period: 'Siglo XXI',
      numberOfItems: 18,
      featuredArtworks: ['Instalación lumínica', 'Escultura digital', 'Pintura abstracta']
    }
  ];

  constructor(private dialog: MatDialog) {}

  openCollectionDetail(collection: Collection): void {
    this.dialog.open(CollectionDetailDialogComponent, {
      width: '800px',
      data: collection,
      panelClass: 'collection-dialog'
    });
  }
}