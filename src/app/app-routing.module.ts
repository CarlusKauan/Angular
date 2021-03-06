import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';
import { CadastrarProdutosComponent } from './components/produtos/cadastrar-produtos/cadastrar-produtos.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { PreVendasComponent } from './components/produtos/pre-vendas/pre-vendas.component';

//criar Rotas
const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'produtos', component:ListarProdutosComponent},
  {path:'produtos/cadastrar', component:CadastrarProdutosComponent},
  {path:'produtos/atualizar/:id', component:AtualizarProdutoComponent},
  {path: 'produtos/pre-vendas' , component:PreVendasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
