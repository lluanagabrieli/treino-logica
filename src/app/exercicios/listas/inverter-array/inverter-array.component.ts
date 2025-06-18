import { Component } from '@angular/core';

@Component({
  selector: 'app-inverter-array',
  imports: [],
  templateUrl: './inverter-array.component.html',
  styleUrl: './inverter-array.component.css'
})
export class InverterArrayComponent {
  numeros: number[] = [10, 20, 30, 40];

  ngOnInit(): void {
    this.inverterLista(this.numeros);
  }

  inverterLista(lista: number[]) {
    // reverse inverte e altera a lista original
    lista.reverse();

    console.log(lista);
    console.log(this.numeros);
  }
}
