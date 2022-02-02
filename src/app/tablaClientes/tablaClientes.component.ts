import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClienteServicioService } from '../clienteServicio.service';

@Component({
  selector: 'app-tablaClientes',
  templateUrl: './tablaClientes.component.html',
  styleUrls: ['./tablaClientes.component.css'],
})
export class TablaClientesComponent implements OnInit {
  constructor(private ser: ClienteServicioService) {}

  ngOnInit() {
    this.cargarClientes();
  }

  clientes: Cliente[];

  cargarClientes() {
    this.ser.obtenerClientes().subscribe((dato) => {
      this.clientes = dato;
    });
  }
}
