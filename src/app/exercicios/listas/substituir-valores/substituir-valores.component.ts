import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-substituir-valores',
  imports: [],
  templateUrl: './substituir-valores.component.html',
  styleUrl: './substituir-valores.component.css'
})
export class SubstituirValoresComponent implements OnInit {
  frutas = ['Banana', 'Pêra', 'Limão', 'Pitaia', 'Morango', 'Banana', 'Melancia'];

  ngOnInit(): void {
    // this.frutas.forEach((fruta, index) => {
    //   if(fruta === 'Banana') {
    //     this.frutas[index] = 'Maçã'
    //   }
    // })

    // Método map: cria um novo array com o resultado
    // de uma função aplicada a cada elemento
    // não altera o array original
    let novasFrutas = this.frutas.map(fruta =>
      fruta === 'Banana' ? 'Maçã' : fruta
    );

    // 17:55
    console.log(novasFrutas);
    console.log(this.frutas);
  }
}
