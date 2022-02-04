import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-moduloAdminProductos',
  templateUrl: './moduloAdminProductos.component.html',
  styleUrls: ['./moduloAdminProductos.component.css'],
})
export class ModuloAdminProductosComponent implements OnInit {
  constructor(private serv: ProductoService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  producto: Producto;
  productos: Producto[];

  recibirProducto(val: Producto) {
    this.producto = val;
  }

  cargarProductos() {
    this.serv.obtenerProductos().subscribe((dato) => {
      this.productos = dato;
    });
  }
  recibirClienteAdd(val: Producto) {
    let exist: boolean = false;
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].id == val.id) {
        this.productos[i] = val;
        exist = true;
      }
    }
    if (!exist) {
      this.productos.push(val);
    }
  }
}
