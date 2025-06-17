import { Component } from '@angular/core';

@Component({
  selector: 'app-filtrar-strings',
  imports: [],
  templateUrl: './filtrar-strings.component.html',
  styleUrl: './filtrar-strings.component.css'
})
export class FiltrarStringsComponent {
  palavras = ['Teste', 'Gato', 'Casa', 'Cidade', 'Pipa', 'Liderança', 'Amor', 'Chocolate', 'Vida'];

  filtro = this.palavras.filter(palavra => palavra.length > 5);
}
