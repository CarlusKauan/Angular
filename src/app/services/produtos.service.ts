import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //URL para buscar a informação no backend.
  private URL: string = 'http://localhost:3000/produtos';

  constructor() { }

  //Fazer nosso método.
  buscarTodos() {


  }
}
