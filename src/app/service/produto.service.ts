import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.dev";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private url = environment.urlApi;

  constructor(private http: HttpClient) { }

  public listProdutos() {
    return this.http.get(`${this.url}/produtos`)
  }
}
