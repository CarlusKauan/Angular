import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {


  //Criando listas arrays
  //Sempre criar antes do construtor
  listaStrings: string[] = ['Primeiro','Segundo','Terceiro'];
  listaNumber: number[] = [1,2,3];

  //Criando array de objeto
  objetoModelo = {
    nome: 'Carlos',
    idade: 17,
    altura: 1.69,
    graduado:false
  };

  //Criando uma array com um objeto interno
  //Sempre criar antes do construtor
  listaProdutos: any = [
    {nome:'Curso de angular',precoProduto: 35.36,Validade:'31/08/2021',id:1},
    {nome:'Curso de ionic', precoProduto: 50.36,Validade:'27/09/2021',id:2, promocao:true},
    {nome:'Curso de Kotlin', precoProduto: 80.36,Validade:'27/10/2021',id:3},
    {nome:'Curso de SQL', precoProduto: 100.50, Validade:'27/11/2021',id:4},
    {nome:'Curso de JavaScript', precoProduto: 180, Validade:'30/12/2021', id:5, promocao:true}
  ]

  constructor() {
    //Laço faça
    for (let item of this.listaStrings){
      //Exibir posições
      console.log(item);
    }
    for (const item of this.listaNumber){
      //Exibir posições
      console.log(item);
    }

    //Chamando propriedades das Arrays
    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);
    console.log(this.objetoModelo.idade);
    console.log(this.objetoModelo.altura);


  }

  ngOnInit(): void {

  }

}
