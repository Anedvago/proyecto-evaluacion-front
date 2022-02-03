import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from '../Producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-buscadorProductos',
  templateUrl: './buscadorProductos.component.html',
  styleUrls: ['./buscadorProductos.component.css'],
})
export class BuscadorProductosComponent implements OnInit {
  @Output() enviarProducto = new EventEmitter<Producto>();

  constructor(private ser: ProductoService) {}

  ngOnInit() {}

  numRef: number;
  mensaje: string;
  prod: Producto;

  buscarProd() {
    this.ser.obtenerUnProducto(this.numRef).subscribe(
      (dato) => {
        this.prod = dato;
        this.mensaje =
          'Referencia: ' + this.prod.id + ' nombre: ' + this.prod.nombre;
        this.enviarProducto.emit(this.prod);
      },
      (error) => {
        this.mensaje = 'No encontrado';
      }
    );
  }
}
