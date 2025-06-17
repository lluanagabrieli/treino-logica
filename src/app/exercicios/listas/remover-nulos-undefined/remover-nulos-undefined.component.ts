import { Component } from '@angular/core';

@Component({
  selector: 'app-remover-nulos-undefined',
  imports: [],
  templateUrl: './remover-nulos-undefined.component.html',
  styleUrl: './remover-nulos-undefined.component.css'
})
export class RemoverNulosUndefinedComponent {
  palavras = [null, 'Luana', undefined, 1234, 'Gabrieli', undefined];

  palavrasFiltradas = this.palavras.filter(palavra =>
    palavra !== null && palavra !== undefined
  );
}
