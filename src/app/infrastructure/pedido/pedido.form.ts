import { Injectable } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable()
export default class PedidoForm {
  public pedidoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pedidoForm = this.fb.group({
      id: [''],
      usuario: [''],
      statusPedido: [''],
      produto: [''],
      quantidadeProduto: [1],
      pedidosAdicionais: this.fb.array([this.produtosAdicionaisGroup()])
    });
  }

  public get form(): FormGroup {
    return this.pedidoForm;
  }

  public get id(): string {
    return this.pedidoForm.get('username')?.value;
  }

  public set id(value: string) {
    this.pedidoForm.get('username')?.setValue(value);
  }

  public get usuario(): string {
    return this.pedidoForm.get('usuario')?.value;
  }

  public set usuario(value: string) {
    this.pedidoForm.get('password')?.setValue(value);
  }

  public get produto(): string {
    return this.pedidoForm.get('produto')?.value;
  }

  public set produto(value: string) {
    this.pedidoForm.get('produto')?.setValue(value);
  }

  public get statusPedido(): string {
    return this.pedidoForm.get('statusPedido')?.value;
  }

  public set statusPedido(value: string) {
    this.pedidoForm.get('statusPedido')?.setValue(value);
  }

  public get quantidadeProduto(): number {
    return this.pedidoForm.get('quantidadeProduto')?.value;
  }

  public set quantidadeProduto(value: number) {
    this.pedidoForm.get('quantidadeProduto')?.setValue(value)
  }

  public get produtosAdicionais() {
    return <FormArray>this.pedidoForm.controls['pedidosAdicionais'];
  }

  public addProdutosAdicionais() {
    this.produtosAdicionais.push(this.produtosAdicionaisGroup());
  }

  public removeProdutosAdicionais(index: number) {
    this.produtosAdicionais.removeAt(index);
  }

  public produtosAdicionaisGroup() {
    return this.fb.group({
      produtoAdicional: [''],
      quantidadeProdutoAdicional: ['']
    });
  }
  public get isValid(): boolean {
    return this.pedidoForm.valid;
  }

  public getData() {
    return {
      id: null,
      usuario: 1,
      statusPedido: 'pendente',
      produtos: this.produto,
      quantidadeProduto: this.quantidadeProduto
    }
  }
}
