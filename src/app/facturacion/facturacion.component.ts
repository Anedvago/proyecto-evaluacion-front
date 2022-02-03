import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ArticuloFact } from '../ArticuloFact';
import { Cliente } from '../Cliente';
import { Producto } from '../Producto';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css'],
})
export class FacturacionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  cliente: Cliente;
  clientExist: boolean = false;

  producto: Producto;
  prodExist: boolean = false;
  cantidad: number;
  cantExist: boolean = false;

  productos: ArticuloFact[] = [];

  articulo: ArticuloFact;

  total: number;

  fecha: Date = new Date();

  establecerTotal() {
    let suma: number = 0;
    for (let i = 0; i < this.productos.length; i++) {
      suma += this.productos[i].subtotal;
    }
    this.total = suma;
  }

  recibirCliente(val: Cliente) {
    this.cliente = val;
    this.clientExist = true;
  }

  recibirProducto(val: Producto) {
    this.producto = val;
    this.prodExist = true;
  }
  recibirCant(val: number) {
    this.cantidad = val;
    this.cantExist = true;
    if (this.prodExist == true) {
      this.articulo = new ArticuloFact(this.producto, this.cantidad);
      this.productos.push(this.articulo);
      this.prodExist = false;
      this.establecerTotal();
    }
  }

  quitarArticulo(i: number) {
    this.productos.splice(i, 1);
    this.establecerTotal();
  }
}
