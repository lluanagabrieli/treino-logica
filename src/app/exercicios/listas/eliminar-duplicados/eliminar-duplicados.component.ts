import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar-duplicados',
  imports: [],
  templateUrl: './eliminar-duplicados.component.html',
  styleUrl: './eliminar-duplicados.component.css'
})
export class EliminarDuplicadosComponent implements OnInit{
  cidades = ['Itajubá', 'Piranguinho', 'Piranguinho', 'Maria da Fé', 'Itajubá'];

  ngOnInit(): void {
    this.removerDuplicados();
  }

  removerDuplicados() {
    // a variável cidades vai receber um novo array, através do método filter
    // filter é um método que cria um novo array se os elementos passarem no teste dele
    // filter não altera o array original
    // ele está recebendo 3 argumentos: o valor sendo a cidade, o index da cidade e o arrayOriginar que é a própria lista

    // indexOf retorna o index da primeira ocorrencia de um elemento em um array
    // teste do filter: ele percorre por cada valor, verificando a primeira
    // ocorrência desse valor e comparando com o index do elemento atual
    // se o index de ocorrência for igual ao index do elemento, significa que ele não é repetido

    // se a ocorrência do elemento atual já foi feita e tem index diferente,
    // então significa que são elementos repetidos
   this.cidades = this.cidades.filter((cidade, index, arrayOriginal) => {
    return arrayOriginal.indexOf(cidade) === index;
   })

   console.log(this.cidades);
  }
}

// cidades = ['Itajubá', 'Piranguinho', 'Piranguinho', 'Maria da Fé', 'Itajubá'];

// 1ª volta
// cidade = 'Itajubá'

// index = 0

// arrayOriginal = ['Itajubá', 'Piranguinho', 'Piranguinho', 'Maria da Fé', 'Itajubá'];

// arrayOriginal.indexOf('Itajubá') = 0

// 0 === 0 ✅ entra no novo array

// 2ª volta
// cidade = 'Piranguinho'

// index = 1

// arrayOriginal.indexOf('Piranguinho') = 1

// 1 === 1 ✅ entra no novo array

// 3ª volta
// cidade = 'Piranguinho'

// index = 2

// arrayOriginal.indexOf('Piranguinho') = 1

// 1 === 2 ❌ não entra (porque já apareceu antes)

// 4ª volta
// cidade = 'Maria da Fé'

// index = 3

// arrayOriginal.indexOf('Maria da Fé') = 3

// 3 === 3 ✅ entra no novo array

// 5ª volta
// cidade = 'Itajubá'

// index = 4

// arrayOriginal.indexOf('Itajubá') = 0

// 0 === 4 ❌ não entra (porque já apareceu antes)
