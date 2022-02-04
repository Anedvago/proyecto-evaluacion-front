import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Producto } from '../Producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-tablaProductos',
  templateUrl: './tablaProductos.component.html',
  styleUrls: ['./tablaProductos.component.css'],
})
export class TablaProductosComponent implements OnInit {
  @Input() productos: Producto[];
  @Output() enviarProducto = new EventEmitter<Producto>();

  constructor(private serv: ProductoService) {}

  ngOnInit() {}

  cargarDatosDeProducto(id: number) {
    this.enviarProducto.emit(this.productos.find((i) => i.id === id));
  }

  eliminarProducto(id: number) {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].id == id) {
        this.productos.splice(i, 1);
      }
    }
    this.serv.eliminar(id).subscribe((dato) => {});
  }
}
