import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() foto: string = '';
  @Input() nomeProduto: string = '';
  @Input() produto: string = '';
  @Input() promocao: boolean = true;
  @Input() idProduto: number = 0;
  @Input() dataValidade: string = '';
  @Input() precoProduto: number = 10;


  constructor() { }

  ngOnInit(): void {
  }

}
