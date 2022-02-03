import { Cliente } from './Cliente';

export class Factura {
  consecutivo: number;
  cliente: Cliente;
  fecha: Date;

  constructor(cliente: Cliente, fecha: Date) {
    this.cliente = cliente;
    this.fecha = fecha;
  }
}
