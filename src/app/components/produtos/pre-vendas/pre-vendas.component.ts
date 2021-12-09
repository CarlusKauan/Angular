import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-vendas',
  templateUrl: './pre-vendas.component.html',
  styleUrls: ['./pre-vendas.component.css']
})
export class PreVendasComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  idProduto: number = 3.5;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade: string = '2021/12/31';

  // Template string
  anuncio: string = `Fique de olho, mangás em promoção`;

  constructor() { }

  ngOnInit(): void {
  }

}
