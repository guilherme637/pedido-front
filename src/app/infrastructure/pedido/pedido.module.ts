import { NgModule } from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {RouterModule} from "@angular/router";
import {PedidoComponent} from "./pedido.component";
import {PedidoRoutingModule} from "./pedido.routing.module";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {PedidoService} from "./pedido.service";
import {ProdutoModule} from "../produto/produto.module";

@NgModule({
  declarations: [
    PedidoComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    ProdutoModule
  ],
  exports: [
    PedidoComponent
  ],
  providers: [FormBuilder, PedidoService]
})
export class PedidoModule { }
