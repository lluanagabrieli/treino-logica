import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soma-elementos',
  imports: [],
  templateUrl: './soma-elementos.component.html',
  styleUrl: './soma-elementos.component.css'
})
export class SomaElementosComponent implements OnInit {
  valorTotal: number = 0;

  ngOnInit(): void {
    this.valorTotal = this.somaElementos([100,200,300,400,500]);
  }

  somaElementos(numeros: number[]) {
    let soma = 0;

    numeros.forEach(numero => {
      soma = soma + numero;
    })

    return soma
  }
}
