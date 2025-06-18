import { Component } from '@angular/core';

@Component({
  selector: 'app-verificar-existencia',
  imports: [],
  templateUrl: './verificar-existencia.component.html',
  styleUrl: './verificar-existencia.component.css'
})
export class VerificarExistenciaComponent {
  valores = [10, 130, 1, 34, 12, 4, 43];

  // some retorna um booleano se pelo menos um elemento do array corresponde a condição
  verificaNumero = this.valores.some(valor => valor === 10);
}
