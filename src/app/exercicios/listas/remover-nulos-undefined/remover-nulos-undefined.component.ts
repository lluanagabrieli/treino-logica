import { Component } from '@angular/core';

@Component({
  selector: 'app-remover-nulos-undefined',
  imports: [],
  templateUrl: './remover-nulos-undefined.component.html',
  styleUrl: './remover-nulos-undefined.component.css'
})
export class RemoverNulosUndefinedComponent {
  palavras = [null, 0, 'Luana', undefined, 1234, 'Gabrieli', undefined, ''];

  // filter retorna só os valores considerados truthy
  // colocando a condição palavra, ele já retorna somente os valores verdadeiros
  // valores que são falsy: null, undefined, false, 0, NaN, ''
  palavrasFiltradas = this.palavras.filter(palavra => palavra);
}
