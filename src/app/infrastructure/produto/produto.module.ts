import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProdutoComponent} from "./produto.component";
import {ProdutoRoutingModule} from "./produto.routing.module";
import {ProdutoService} from "../service/produto.service";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    ProdutoComponent
  ],
  providers: [ProdutoService]
})
export class ProdutoModule { }
