import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'produtos', pathMatch: 'full'
  },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./infrastructure/produto/produto.module').then((m) => m.ProdutoModule),
  },
  {
    path: 'pedidos',
    loadChildren: () =>
      import('./infrastructure/pedido/pedido.module').then((m) => m.PedidoModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
