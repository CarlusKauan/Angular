import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  //Criando listas arrays
  listaStrings: string[] = ['Primeiro','Segundo','Terceiro'];
  listaNumber: number[] = [1,2,3]

  constructor() {
    //Laço faça
    for (let item of this.listaStrings){
      //Exibir posições
      console.log(item);
    }
  }

  ngOnInit(): void {

  }

}
