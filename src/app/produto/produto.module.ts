import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProdutoComponent} from "./produto.component";
import {ProdutoRoutingModule} from "./produto.routing.module";
import {ProdutoService} from "../service/produto.service";

@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  exports: [
    ProdutoComponent
  ],
  providers: [ProdutoService]
})
export class ProdutoModule { }
