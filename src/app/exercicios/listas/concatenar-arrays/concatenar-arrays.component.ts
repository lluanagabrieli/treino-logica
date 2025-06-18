import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concatenar-arrays',
  imports: [],
  templateUrl: './concatenar-arrays.component.html',
  styleUrl: './concatenar-arrays.component.css'
})
export class ConcatenarArraysComponent implements OnInit {
  numerosAdicionais = [50, 60, 70];

  ngOnInit(): void {
    this.concatenar(this.numerosAdicionais);
  }

  concatenar(numeros: number[]) {
    let listaNumeros = [10, 20, 30, 40];

    // retorna uma nova lista, concatenando uma lista com outra lista ou elementos
    let novaLista = listaNumeros.concat(numeros);
  }
}
