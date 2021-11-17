import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  nome: string = "Banana"
  validade: string = "12/11/2021"
  precoProduto: number = 5

  constructor() { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    console.log("Nome: ",this.nome);
    console.log("Validade: ", this.validade);
    console.log("Preço: ", this.precoProduto);
    alert("Salvo com sucesso");
  }

}
