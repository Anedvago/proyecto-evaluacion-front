import { Component, OnInit } from '@angular/core';
import { ArticuloFact } from '../ArticuloFact';
import { Cliente } from '../Cliente';
import { Detalle } from '../Detalle';
import { DetalleService } from '../detalle.service';
import { Factura } from '../Factura';
import { FacturaService } from '../factura.service';
import { Producto } from '../Producto';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css'],
})
export class FacturacionComponent implements OnInit {
  constructor(private serv: FacturaService, private serv2: DetalleService) {}

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

  factura: Factura;
  facturaLista: boolean = false;

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

  cliEscNo: boolean = true;
  prodEscNo: boolean = true;

  guardarFactura() {
    let fact01 = new Factura(this.cliente, this.fecha);
    let detalle;
    if (this.productos.length != 0) {
      this.prodEscNo = true;
      this.cliEscNo = true;
      this.serv.agregarNueva(fact01).subscribe(
        (dato) => {
          this.factura = dato;
          for (let i = 0; i < this.productos.length; i++) {
            detalle = new Detalle(
              this.factura,
              this.productos[i].producto,
              this.productos[i].cantidad
            );
            this.serv2.agregarNuevo(detalle).subscribe(
              (dato) => {},
              (error) => {}
            );
            this.facturaLista = true;
          }
        },
        (error) => {
          this.cliEscNo = false;
        }
      );
    } else {
      this.prodEscNo = false;
    }
  }
}
