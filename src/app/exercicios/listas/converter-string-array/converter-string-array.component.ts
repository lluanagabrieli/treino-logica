import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter-string-array',
  imports: [],
  templateUrl: './converter-string-array.component.html',
  styleUrl: './converter-string-array.component.css'
})
export class ConverterStringArrayComponent implements OnInit {
  nomes = 'Luana, Roberto, Lucas, Mariana';

  ngOnInit(): void {
    // o método split converte a string em um array
    // retorna uma nova lista, sem modificar a original
    // tudo que estiver depois da vírgula vira um item
    // da lista
    let conversao = this.nomes.split(',');

    console.log(conversao);
  }
}
