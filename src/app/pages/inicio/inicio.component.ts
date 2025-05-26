import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  constructor(private router: Router) {}

  activeSlide = 0;

  obrasDestacadas = [
    {
      titulo: 'Bienvenido al Museo Lumière Éternelle',
      autor: '',
      anio: '',
      estilo: '',
      imagen: 'assets/museo/exteriorMuseo.png'
    },
    {
      titulo: 'Explora siglos de historia',
      autor: '',
      anio: '',
      estilo: '',
      imagen: 'assets/museo/interiorMuseo.png'
    },
    {
      titulo: 'Un espacio para inspirarse',
      autor: 'Conecta con el arte en un entorno único',
      anio: '',
      estilo: '',
      imagen: 'assets/museo/interiorMuseo2.png'
    },
    {
      titulo: 'Ven y aprende sobre arte',
      autor: 'Explora cada rincón de nuestro museo sin salir de casa',
      anio: '',
      estilo: '',
      imagen: 'assets/museo/interiorMuseo3.png'
    }
  ];

  cards = [
    {
      titulo: 'Ir a Galería',
      descripcion: 'Explora las obras maestras del museo.',
      imagen: 'assets/museo/galeria3.png',
      ruta: '/galeria'
    },
    {
      titulo: 'Talleres',
      descripcion: 'Actividades educativas',
      imagen: 'assets/museo/actividades.png',
      ruta: '/actividades'
    },
    {
      titulo: 'Biblioteca y Centro de Investigación',
      descripcion: 'Investiga y aprende más',
      imagen: 'assets/museo/Biblioteca.jpg',
      ruta: '/biblioteca'
    },
    {
      titulo: 'Horarios y Precios',
      descripcion: 'Consulta nuestros horarios',
      imagen: 'assets/museo/galeria1.png',
      ruta: '/horarios'
    },
    {
      titulo: 'Historia del Museo',
      descripcion: 'Descubre nuestros orígenes',
      imagen: 'assets/museo/galeria2.png',
      ruta: '/historia'
    },
    {
      titulo: 'Colecciones',
      descripcion: 'Accede a las colecciones',
      imagen: 'assets/museo/coleccion.png',
      ruta: '/colecciones'
    },
    {
      titulo: 'Exposiciones y Eventos',
      descripcion: 'Descubre lo nuevo',
      imagen: 'assets/museo/tienda.png',
      ruta: '/eventos'
    }
  ];

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }

  ngOnInit() {
    setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.obrasDestacadas.length;
    }, 5000);
  }
}
