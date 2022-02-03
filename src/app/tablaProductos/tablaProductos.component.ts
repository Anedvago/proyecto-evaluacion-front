import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Producto } from '../Producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-tablaProductos',
  templateUrl: './tablaProductos.component.html',
  styleUrls: ['./tablaProductos.component.css'],
})
export class TablaProductosComponent implements OnInit {
  @Output() enviarProducto = new EventEmitter<Producto>();

  constructor(private serv: ProductoService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  productos: Producto[];

  cargarProductos() {
    this.serv.obtenerProductos().subscribe((dato) => {
      this.productos = dato;
    });
  }

  cargarDatosDeProducto(id: number) {
    this.enviarProducto.emit(this.productos.find((i) => i.id === id));
  }

  eliminarProducto(id: number) {
    this.serv.eliminar(id).subscribe((dato) => {});
    window.location.reload();
  }
}
