import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //URL para buscar a informação no backend.
  private URL: string = 'http://localhost:3000/produtos';

  //Criar Váriavel.
  constructor(private http: HttpClient) { }

  //Fazer nosso método.
  buscarTodos() {
    //Retornar e listar com Get.
    return this.http.get(this.URL);

  }
}
