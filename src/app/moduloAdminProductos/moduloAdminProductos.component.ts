import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';

@Component({
  selector: 'app-moduloAdminProductos',
  templateUrl: './moduloAdminProductos.component.html',
  styleUrls: ['./moduloAdminProductos.component.css'],
})
export class ModuloAdminProductosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  producto: Producto;
  recibirProducto(val: Producto) {
    this.producto = val;
  }
}
