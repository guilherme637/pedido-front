import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../service/produto.service";
import {ProdutoItemInterface} from "../../domain/produtoItem.interface";
import {ProdutoVO} from "../VO/produtoVo";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  produtos: ProdutoItemInterface[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  public getProdutos() {
    this.produtoService.listProdutos()
      .subscribe(
        (produtos) => { this.produtos = produtos.produtos }
      );
  }

  public sendDataToPagePedido(produto: ProdutoItemInterface): ProdutoVO {
    return new ProdutoVO(produto);
  }
}
