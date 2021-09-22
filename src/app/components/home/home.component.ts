import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Variaveis tem que ser criadas antes do Constructor
  nomeProduto: string = "Curso de Angular";
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;

  constructor() {}

  ngOnInit(): void {
  }

}
