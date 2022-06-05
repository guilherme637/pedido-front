import {ProdutoService} from "../service/produto.service";
import {Observable} from "rxjs";
import {ProdutoInterface} from "../../domain/produto.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor(private produtoService: ProdutoService) {
  }

  public getProdutos(): Observable<ProdutoInterface> {
    return this.produtoService.listProdutos();
  }
}
