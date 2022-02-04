import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClienteServicioService } from '../clienteServicio.service';

@Component({
  selector: 'app-moduloAdminCliente',
  templateUrl: './moduloAdminCliente.component.html',
  styleUrls: ['./moduloAdminCliente.component.css'],
})
export class ModuloAdminClienteComponent implements OnInit {
  constructor(private ser: ClienteServicioService) {}

  ngOnInit() {
    this.cargarClientes();
  }

  cliente: Cliente;
  clientes: Cliente[];

  recibirClienteAdd(val: Cliente) {
    if (val.cliente == 0) {
      this.clientes.push(val);
    } else {
      for (let i = 0; i < this.clientes.length; i++) {
        if (this.clientes[i].cliente === val.cliente) {
          this.clientes[i] = val;
        }
      }
    }
  }

  recibirCliente(val: Cliente) {
    this.cliente = val;
  }

  cargarClientes() {
    this.ser.obtenerClientes().subscribe((dato) => {
      this.clientes = dato;
    });
  }
}
