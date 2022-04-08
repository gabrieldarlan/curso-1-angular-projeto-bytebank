import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  // tslint:disable-next-line: variable-name
  private _listaTransferencia: any[];

  constructor() {
    this._listaTransferencia = [];
  }

  public get listaTransferencia(): any[] {
    return this._listaTransferencia;
  }

  adicionar(transferencia: any): void {
    this.hidratar(transferencia);
    this._listaTransferencia.push(transferencia);
  }
  hidratar(transferencia: any): void {
    transferencia.data = new Date();
  }
}
