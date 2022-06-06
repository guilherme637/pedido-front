import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export default class PedidoForm {
  public pedidoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pedidoForm = this.fb.group({
      id: [''],
      usuario: [''],
      statusPedido: [''],
      quantidade: [''],
      produtos: ['']
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
    return this.pedidoForm.get('produtos')?.value;
  }

  public set produto(value: string) {
    this.pedidoForm.get('produtos')?.setValue(value);
  }

  public get statusPedido(): string {
    return this.pedidoForm.get('statusPedido')?.value;
  }

  public set statusPedido(value: string) {
    this.pedidoForm.get('statusPedido')?.setValue(value);
  }

  public get isValid(): boolean {
    return this.pedidoForm.valid;
  }

  public getData() {
    return {
      id: null,
      usuario: 1,
      statusPedido: 'pendente',
      produtos: this.produto
    }
  }
}
