import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  //Criando listas arrays
  //Sempre criar antes do construtor
  // listaStrings: string[] = ['Primeiro','Segundo','Terceiro'];
  // listaNumber: number[] = [1,2,3];

  // //Criando array de objeto
  // objetoModelo = {
  //   nome: 'Carlos',
  //   idade: 17,
  //   altura: 1.69,
  //   graduado:false
  // };

  //Criando uma array com um objeto interno
  //Sempre criar antes do construtor
  listaProdutos: IProduto[] = [];

  constructor(private produtosService: ProdutosService) {
    // //Laço faça
    // for (let item of this.listaStrings){
    //   //Exibir posições
    //   console.log(item);
    // }
    // for (const item of this.listaNumber){
    //   //Exibir posições
    //   console.log(item);
    // }

    // //Chamando propriedades das Arrays
    // console.log(this.objetoModelo);
    // console.log(this.objetoModelo.nome);
    // console.log(this.objetoModelo.idade);
    // console.log(this.objetoModelo.altura);

  }

  ngOnInit(): void {
      this.carregarProdutos();
   }

  carregarProdutos() : void{
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listaProdutos = retorno;
    })
  };

  deletar(produto: IProduto) : void{
    this.produtosService.excluir(produto.id!).subscribe(() => {
      this.produtosService.exibirMensagem(
        'Sistema',
        `${produto.nome} foi excluido com sucesso. ID: ${produto.id}`,
        'toast-warning'
      );
      this.carregarProdutos();
    });

  }
}
