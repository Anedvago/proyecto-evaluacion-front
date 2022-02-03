import { Factura } from './Factura';
import { Producto } from './Producto';

export class Detalle {
  id: number;
  consecutivo: Factura;
  idProducto: Producto;
  cantidad: number;
  valorUnitario: number;

  constructor(factura: Factura, producto: Producto, cantidad: number) {
    this.consecutivo = factura;
    this.idProducto = producto;
    this.cantidad = cantidad;
    this.valorUnitario = producto.valorUnitario;
  }
}
