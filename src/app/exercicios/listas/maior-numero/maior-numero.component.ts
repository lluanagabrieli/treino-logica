import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maior-numero',
  imports: [],
  templateUrl: './maior-numero.component.html',
  styleUrl: './maior-numero.component.css'
})
export class MaiorNumeroComponent {
  numeros = [120, 908, 914, 567, 7374];
  maiorNumero: number = this.encontrarNumeroMaior();

  encontrarNumeroMaior() {
    // let numeroInicial = 0;
    // let maiorNumero = 0;

    // this.numeros.forEach(numero => {
    //   if(numero > numeroInicial) {
    //     maiorNumero = numero;
    //     numeroInicial = numero;
    //   }
    // })

    // return maiorNumero;

    // versão simplificada com função javascript
    return Math.max(...this.numeros);
  }
}
