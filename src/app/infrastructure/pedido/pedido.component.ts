import {Component, OnInit} from '@angular/core';
import {ProdutoVO} from "../VO/produtoVo";
import {FormGroup} from "@angular/forms";
import {PedidoService} from "./pedido.service";
import {ProdutoItemInterface} from "../../domain/produtoItem.interface";
import PedidoForm from "./pedido.form";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  private produto: ProdutoVO;
  public produtoAdicional = false;
  public form: FormGroup;
  public produtos: ProdutoItemInterface[] = [];

  constructor(private pedido: PedidoService, private _pedidoForm: PedidoForm) {
    this.produto = history.state as ProdutoVO;
    this._pedidoForm.produto = this.produto.nome;
    this.form = this._pedidoForm.form;
  }

  ngOnInit(): void {
    // "id": null,
    //   "usuario" : 1,
    //   "statusPedido": "Pendente",
    //   "produtos" : [
    //   {
    //     "nome": "hamburguer",
    //     "preco": "35.90"
    //   },
    //   {
    //     "nome": "batata-frita",
    //     "preco": "6.90"
    //   }
    // ]

    this.getListProduto();
  }

  public getProdutoAdicional() {
    this._pedidoForm.addProdutosAdicionais();
    this.defineProdutoAdicional();
  }

  public defineProdutoAdicional() {
    return this.produtoAdicional = !this.produtoAdicional;
  }

  public getRemoveProdutosAdicionais(index: number) {
    this._pedidoForm.removeProdutosAdicionais(index);
    this.defineProdutoAdicional();
  }

  public getListProduto() {
    this.pedido.getProdutos()
      .subscribe(
        (produtos) => { this.produtos = produtos.produtos }
      );
  }

  public getProduto(): ProdutoVO {
    return this.produto;
  }

  public getOption(): Array<number> {
    return [1,2,3,4,5,6,7,8,9,10];
  }

  public get pedidoForm() {
    return this._pedidoForm
  }
  public onSubmit() {
    console.log(this.form.value);
  }
}
