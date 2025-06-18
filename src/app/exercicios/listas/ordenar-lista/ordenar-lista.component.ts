import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar-lista',
  imports: [],
  templateUrl: './ordenar-lista.component.html',
  styleUrl: './ordenar-lista.component.css'
})
export class OrdenarListaComponent implements OnInit {
  numeros = [10, 50, 192, 4, 459, 1, 215];

  ngOnInit(): void {
    // sort() faz a ordenação, comparando pares de elementos. Com a função abaixo, ele
    // aplica um algoritmo de ordenação e deixa os números em ordem crescente
    let numerosOrdenados = this.numeros.sort((a, b) => a - b);
  }
}
