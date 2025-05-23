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
