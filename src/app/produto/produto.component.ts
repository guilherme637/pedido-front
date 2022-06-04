import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProdutoService} from "../service/produto.service";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  private url: string

  constructor() {
    this.url = 'http://localhost:8000';
  }

  ngOnInit(): void {
  }

  public listarProdutos() {
    // this.http.get(`${this.url}/produtos`)
    //   .subscribe(
    //     resultado => {
    //       console.log(resultado)
    //     }
    //   )
  }
}
