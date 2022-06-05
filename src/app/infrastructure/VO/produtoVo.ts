import {ProdutoItemInterface} from "../../domain/produtoItem.interface";

export class ProdutoVO implements ProdutoItemInterface {
  public readonly id: number;
  public readonly nome: string;
  public readonly preco: number;
  public readonly endereco: string;

  constructor(data: ProdutoItemInterface) {
    this.id = data.id;
    this.nome = data.nome;
    this.preco = data.preco;
    this.endereco = data.endereco;
  }
}
