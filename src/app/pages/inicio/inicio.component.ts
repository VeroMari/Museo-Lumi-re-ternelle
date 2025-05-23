import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  activeSlide = 0;

  obrasDestacadas = [
    {
      titulo: 'The Starry Night',
      autor: 'Vincent van Gogh',
      anio: 1889,
      estilo: 'Post-Impressionism',
      imagen: 'assets/pinturas/van-gogh.jpg'
    },
    {
      titulo: 'Mona Lisa',
      autor: 'Leonardo da Vinci',
      anio: 1503,
      estilo: 'Renaissance',
      imagen: 'assets/pinturas/mona-lisa.jpg'
    },
    {
      titulo: 'The Persistence of Memory',
      autor: 'Salvador Dalí',
      anio: 1931,
      estilo: 'Surrealism',
      imagen: 'assets/pinturas/dali.jpg'
    }
  ];

  ngOnInit() {
    setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.obrasDestacadas.length;
    }, 5000);
  }
}

