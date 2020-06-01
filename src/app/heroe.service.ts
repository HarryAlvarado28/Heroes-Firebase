import { Injectable } from '@angular/core';
import { HeroesLista } from './heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor() { }

  getHeroes(): HeroesLista[] {
    return this.heroesListaData
  }

  private heroesListaData: HeroesLista[] = [
    {
      nombre: 'Capitan America',
      descripcion: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
    },
    {
      nombre: 'Hombre Araña',
      descripcion: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
    },
    {
      nombre: 'Batman',
      descripcion: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
    },
    {
      nombre: 'Iroman',
      descripcion: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
    },
  ]

}
