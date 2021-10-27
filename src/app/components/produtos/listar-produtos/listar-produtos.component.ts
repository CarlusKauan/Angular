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
