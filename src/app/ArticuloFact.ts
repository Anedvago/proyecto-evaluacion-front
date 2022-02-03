import { Producto } from './Producto';

export class ArticuloFact {
  producto: Producto;
  cantidad: number;
  subtotal: number;

  constructor(producto: Producto, cantidad: number) {
    this.producto = producto;
    this.cantidad = cantidad;
    this.subtotal = producto.valorUnitario * cantidad;
  }
}
