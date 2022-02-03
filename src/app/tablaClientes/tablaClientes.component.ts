import { Component, NgZone, OnInit, Output, Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClienteServicioService } from '../clienteServicio.service';
import { TipoIdentificacion } from '../TipoIdentificacion';

@Component({
  selector: 'app-tablaClientes',
  templateUrl: './tablaClientes.component.html',
  styleUrls: ['./tablaClientes.component.css'],
})
export class TablaClientesComponent implements OnInit {
  @Output() enviarCliente = new EventEmitter<Cliente>();

  constructor(
    private ser: ClienteServicioService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.cargarClientes();
  }

  clientes: Cliente[];

  cargarClientes() {
    this.ser.obtenerClientes().subscribe((dato) => {
      this.clientes = dato;
    });
  }

  cargarDatosDeCliente(id: number) {
    this.enviarCliente.emit(this.clientes.find((i) => i.cliente === id));
  }

  eliminarCliente(id: number) {
    this.ser.eliminar(id).subscribe((dato) => {});
    window.location.reload();
  }
}
