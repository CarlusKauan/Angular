import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Aula 10 - TypeScript 22/09/21

  // Variaveis tem que ser criadas antes do Constructor

  nomeProduto: string = 'Curso de Angular';
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;


  // Template string
  anuncio: string = `O ${this.nomeProduto} está em promoção!`;

  constructor() {
  // variáveis de string concatenação
  // this.anuncio = 'O ' + this.nomeProduto + ' esta em promoção';

  console.log('Nome do Produto: ', this.nomeProduto);

  console.log('O preço do produto é: R$', this.precoProduto);

  console.log(`O id do produto é : ${this.idProduto}`);

  console.log(`A promoção do ${this.nomeProduto} é: ${this.promocao}`);

  console.log(this.anuncio);

  console.log(`O ${this.nomeProduto} está em promoção ${this.promocao} com o id ${this.idProduto} mais o preço de R$: ${this.precoProduto}`)


  // let, const, var
  let idade = 10;
  function imprimeIdade(){
    for(let idade = 30; idade <= 40; idade++){
      console.log('a idade é ', idade);
    }
      console.log('a sua idade final é ',idade);
  }
  imprimeIdade();
}

  ngOnInit(): void {
  }

}
