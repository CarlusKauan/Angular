import { IProduto } from '../model/IProduto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //URL para buscar a informação no backend.
  private URL: string = 'http://localhost:3000/produtos';

  //Criar Váriavel.
  constructor(private http: HttpClient) { }

  //Fazer nosso método.
  buscarTodos() : Observable<IProduto[]> {
    //Retornar e listar com Get.
    return this.http.get<IProduto[]>(this.URL);


  }
}
