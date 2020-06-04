import { Injectable } from '@angular/core';
import { HeroesLista } from './heroe.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor(private _firebase: AngularFirestore) { }

  getHeroes() {
    return this._firebase.collection('ListaHeroes').valueChanges()
    // return this.heroesListaData
  }

  postHeroes(heroes: HeroesLista) {
    this._firebase.collection('ListaHeroes').doc(heroes.nombre).set(heroes)
  }

  delete(heroeName: string) {
    this._firebase.collection('ListaHeroes').doc(heroeName).delete()
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
