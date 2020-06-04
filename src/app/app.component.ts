import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeroeService } from './heroe.service';
import { HeroesLista } from './heroe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Heroes Firebase';
  heroesForm: FormGroup
  heroesLista: HeroesLista[] = [];

  // heroesListaData: HeroesLista[] = [
  // {
  //   nombre: 'Capitan America',
  //   descripcion: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
  // },
  // {
  //   nombre: 'Hombre Araña',
  //   descripcion: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
  // },
  // {
  //   nombre: 'Batman',
  //   descripcion: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
  // },
  // {
  //   nombre: 'Iroman',
  //   descripcion: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
  // },
  // ]

  constructor(private _heroesService: HeroeService) {

  }

  ngOnInit(): void {

    this.heroesForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl(),
    })
    this._heroesService.getHeroes().subscribe((resp: HeroesLista[]) => {
      console.log('Respuesta::: ', resp)
      this.heroesLista = resp
    })
    // this.heroesLista = this._heroesService.getHeroes()
  }

  onSubmit() {
    console.log('VALUE FORM:: ', this.heroesForm.value);
    (this.heroesForm.invalid) ? console.log('No valido') : console.log('Valido')
    console.log('Guardando')
    this._heroesService.postHeroes(this.heroesForm.value)
    this.heroesForm.reset()
  }

  eliminar(heroeName: string) {
    this._heroesService.delete(heroeName)
  }

}
