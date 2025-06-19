import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juntar-elementos-frase',
  imports: [],
  templateUrl: './juntar-elementos-frase.component.html',
  styleUrl: './juntar-elementos-frase.component.css'
})
export class JuntarElementosFraseComponent implements OnInit {
  palavras = ['Olá', 'Bem-vindo'];

  ngOnInit(): void {
    // join pega todos os elementos de uma lista e
    // transforma em uma string, separando os elementos
    // por um separador especificado na função
    let juntar = this.palavras.join(', ');
  }
}
