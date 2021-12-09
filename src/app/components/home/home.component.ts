import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  listagemProduto: any = [
    {Nome:'Curso de JavaScript', Preco: 40.00, validade: '2021-12-21' },
    {Nome:'Curso de Angular', Preco: 20.00, validade: '2021-12-19' },
    {Nome:'Curso de TypeScript', Preco: 80.00, validade: '2021-11-21' },
    {Nome:'Curso de Java', Preco: 30.00, validade: '2021-09-01' },
    {Nome:'Curso de Ionic', Preco: 25.00, validade: '2021-07-12' },
    {Nome:'Curso de Kotlin', Preco: 10.00, validade: '2021-09-15' }
  ]



  // Aula 10 - TypeScript 22/09/21

  // Variaveis tem que ser criadas antes do Constructor

  nomeProduto: string = 'Curso de Angular';
  idProduto: number = 3.5;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade: string = '2021/12/31';

  // Template string
  anuncio: string = `"Fique de olho, mangás em promoção"`;

  constructor() {
    // variáveis de string concatenação
    // this.anuncio = 'O ' + this.nomeProduto + ' esta em promoção';

    console.log('Nome do Produto: ', this.nomeProduto);

    console.log('O preço do produto é: R$', this.precoProduto);

    console.log(`O id do produto é : ${this.idProduto}`);

    console.log(`A promoção do ${this.nomeProduto} é: ${this.promocao}`);

    console.log(this.anuncio);

    console.log(
      `O ${this.nomeProduto} está em promoção ${this.promocao} com o id ${this.idProduto} mais o preço de R$: ${this.precoProduto}`
    );

    // let, const, var
    let idade = 10;
    function imprimeIdade() {
      for (let idade = 20; idade <= 25; idade++) {
        console.log('a idade é ', idade);
      }
      console.log('a sua idade final é ', idade);
    }
    imprimeIdade();


    // Exercícios
    // 1 - variavel = 10; outra_variavel = 30; sem nenhum erro !.
    // 2 - da erro poís a let foi duplicada.
    var variavel = 0;
    var variavel = 10;
    console.log('variável', variavel);
    function funcao() {
      var outra_variavel = 20;
      var outra_variavel = 30;
      console.log('outra variável: ', outra_variavel);
    }
    funcao();

    // 3 - Qual o resultado das variáveis
    /*
    a.Variável a dentro do if: 50
    b.Variável b dentro do if: 60
    c.Variável a dentro da função: 50
    d.Variável b dentro da função: 40
    e.Variável a fora da função: 10
    f.Variável b fora da função: 20
    */

    // var a = 10;
    // let b = 20;
    // function bar(){
    //   var a = 30;
    //   let b = 40;
    //   if(true) {
    //     var a = 50;
    //     let b = 60;
    //     console.log('Variável a dentro do if', a);
    //     console.log('Variável b dentro do if', b);
    //   }
    //   console.log('Variável a dentro da função: ',a);
    //   console.log('Variável b dentro da função: ', b);
    // }
    // bar();
    // console.log('Variável a fora da função', a);
    // console.log('Variável b fora da função', b);

    // 4 - Qual o resultado das variáveis:
    /*
    a.Variável a:1
    b.Variável a dentro do if:4
    c.Variável b dentro do if:2
    d.Variável c dentro do if:3
    e.Variável a fora do if:1
    f.Variável b fora do if:2
    g.O que acontece com a variável c fora do if,
    se tirarmos o comentário? Por que?
    - erro, fora da função ela não foi declarada,
    pois foi declarada como let dentro do 'if(true){...}'
    */

    // let a = 1;
    // function bar(){
    //   console.log('variável a: ', a);
    //   let b = 2;
    //   if(true) {
    //     let c = 3;
    //     let a = 4;
    //     console.log('Variável a dentro do if', a);
    //     console.log('Variável b dentro do if', b);
    //     console.log('Variável c dentro do if: ', c);
    //   }
    //   console.log('Variável a dentro da função: ',a);
    //   console.log('Variável b dentro da função: ', b);
    // }
    // console.log(c);
    // bar();

    // 5 - Qual o resultado das variáveis

    /*
      a.Variável a dentro do if:4
      b.Variável b dentro do if:1
      c.Variável a fora do if:5
      d.Variável b fora do if:10
    */

    // var a = 5;
    // var b = 10;

    // if(a = 5){
    //   let a = 4;
    //   let b = 1;
    //   console.log('Variavel a dentro do if: ', a);
    //   console.log('Variavel b dentro do if ', b);
    // }
    // console.log('Variável a fora do if: ', a);
    // console.log('Variavel b fora do if: ', b);

    // aula 11 - 29/09/21
  }
  ngOnInit(): void {}
}
