import { Component } from '@angular/core';

@Component({
  selector: 'app-dobrar-valores',
  imports: [],
  templateUrl: './dobrar-valores.component.html',
  styleUrl: './dobrar-valores.component.css'
})
export class DobrarValoresComponent {
  numeros = [2, 6, 10];

  // map aplica uma função a cada item do array, criando um novo array com a mesma quantidade de itens
  numerosDobrados = this.numeros.map(numero => numero * 2);
}
