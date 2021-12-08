import { IProduto } from '../model/IProduto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //URL para buscar a informação no backend.
  private URL: string = 'http://localhost:3000/produtos';

  //Criar Váriavel.
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  //Fazer nosso método.
  buscarTodos() : Observable<IProduto[]> {
    //Retornar e listar com Get.
    return this.http.get<IProduto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  buscarPorId(id: number) : Observable<IProduto> {
    //Retornar e listar com Get.
    return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  cadastrar(produto: IProduto) : Observable<IProduto> {
    return this.http.post<IProduto>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  atualizar(produto: IProduto) : Observable<IProduto> {
    return this.http.put<IProduto>(`${this.URL}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  excluir(id: number) : Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  //método Exibir Erro
  exibirErro(e: any): Observable<any> {
    this.exibirMensagem('Erro!', 'Não foi possivel realizar a operação.', 'toast-error');
    return EMPTY;
  }
  //método Exibir Mensagem
  exibirMensagem(titulo: string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo, {closeButton : true, progressBar: true}, tipo);

  }
}
