import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formularioProductos',
  templateUrl: './formularioProductos.component.html',
  styleUrls: ['./formularioProductos.component.css'],
})
export class FormularioProductosComponent implements OnInit {
  producto: Producto;

  @Input() public set productoEnviar(val: Producto) {
    if (val) {
      this.producto = val;

      this.id = val.id;
      this.nombre = val.nombre;
      this.estado = val.estado;
      this.valorUnitario = val.valorUnitario;

      this.tipo = 'modificar';
    } else {
      this.tipo = 'añadir';
    }
  }

  constructor(private serv: ProductoService) {}

  ngOnInit() {}

  tipo: string;

  id: number;
  nombre: string;
  estado: string = 'En inventario';
  valorUnitario: number;

  agregarNuevo() {
    let prod: Producto = new Producto(
      this.id,
      this.nombre,
      this.estado,
      this.valorUnitario
    );
    this.serv.agregarNuevo(prod).subscribe((dato) => {});
    window.location.reload();
  }
}
