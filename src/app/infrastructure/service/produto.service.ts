import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.dev";
import {HttpClient} from "@angular/common/http";
import {ProdutoInterface} from "../../domain/produto.interface";

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private url = environment.urlApi;
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public listProdutos() {
    return this.http.get<ProdutoInterface>(`${this.url}/produtos`);
  }
}
