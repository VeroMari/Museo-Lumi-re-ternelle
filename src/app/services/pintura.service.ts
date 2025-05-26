import { Injectable } from '@angular/core';
import { Pintura } from '../models/pintura.model';

@Injectable({
  providedIn: 'root'
})
export class PinturaService {
  private pinturas: Pintura[] = [
    {
      id: 1,
      titulo: 'La noche estrellada',
      autor: 'Vincent van Gogh',
      anio: 1889,
      estilo: 'Postimpresionismo',
        imagen: 'assets/pinturas/van-gogh.jpg',
      descripcion: 'Una de las obras más famosas del arte europeo.'
    },

  {
    id: 3,
    titulo: 'La Gioconda (Mona Lisa)',
    autor: 'Leonardo da Vinci',
    anio: 1503,
    estilo: 'Renacimiento',
    imagen: 'assets/pinturas/monalisa.jpg',
    descripcion: 'El retrato más famoso de la historia del arte.'
  },
  {
    id: 4,
    titulo: 'El grito',
    autor: 'Edvard Munch',
    anio: 1893,
    estilo: 'Expresionismo',
    imagen: 'assets/pinturas/elGrito.png',
    descripcion: 'Representación icónica de la angustia existencial.'
  },
  {
    id: 5,
    titulo: 'Las meninas',
    autor: 'Diego Velázquez',
    anio: 1656,
    estilo: 'Barroco',
    imagen: 'assets/pinturas/LasMeninas.jpg',
    descripcion: 'Obra maestra de la pintura española.'
  },
  {
    id: 6,
    titulo: 'La persistencia de la memoria',
    autor: 'Salvador Dalí',
    anio: 1931,
    estilo: 'Surrealismo',
    imagen: 'assets/pinturas/memoria.png',
    descripcion: 'Conocida por sus relojes derretidos.'
  },
  {
    id: 7,
    titulo: 'Guernica',
    autor: 'Pablo Picasso',
    anio: 1937,
    estilo: 'Cubismo',
    imagen: 'assets/pinturas/guernica.jpg',
    descripcion: 'Representación del bombardeo de Guernica durante la Guerra Civil española.'
  },
  {
    id: 8,
    titulo: 'La creación de Adán',
    autor: 'Miguel Ángel',
    anio: 1512,
    estilo: 'Renacimiento',
    imagen: 'assets/pinturas/creacionAdam.jpg',
    descripcion: 'Fresco de la Capilla Sixtina.'
  },
  {
    id: 9,
    titulo: 'La joven de la perla',
    autor: 'Johannes Vermeer',
    anio: 1665,
    estilo: 'Barroco',
    imagen: 'assets/pinturas/perla.jpg',
    descripcion: 'Conocida como la "Mona Lisa del Norte".'
  },
  {
    id: 10,
    titulo: 'El nacimiento de Venus',
    autor: 'Sandro Botticelli',
    anio: 1485,
    estilo: 'Renacimiento',
    imagen: 'assets/pinturas/venus.jpg',
    descripcion: 'Representa a Venus emergiendo del mar.'
  },
  {
    id: 11,
    titulo: 'La ronda de noche',
    autor: 'Rembrandt van Rijn',
    anio: 1642,
    estilo: 'Barroco',
    imagen: 'assets/pinturas/rondaNoche.jpg',
    descripcion: 'Retrato grupal de la milicia cívica de Ámsterdam.'
    
  },
  {
    id: 12,
    titulo: 'El jardín de las delicias',
    autor: 'El Bosco',
    anio: 1505,
    estilo: 'Prerrenacimiento',
     imagen: 'assets/pinturas/delicias.avif',
    descripcion: 'Tríptico que representa el Paraíso, la Tierra y el Infierno.'
  },

    {
      id: 2,
      titulo: 'Impresión, sol naciente',
      autor: 'Claude Monet',
      anio: 1872,
      estilo: 'Impresionismo',
      imagen: 'assets/pinturas/monet.jpg',
      descripcion: 'Pintura que dio origen al movimiento impresionista.'
    }
  ];

  obtenerPinturas(): Pintura[] {
    return this.pinturas;
  }

  obtenerPorId(id: number): Pintura | undefined {
    return this.pinturas.find(p => p.id === id);
  }
}
