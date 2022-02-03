import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';

@Component({
  selector: 'app-moduloAdminCliente',
  templateUrl: './moduloAdminCliente.component.html',
  styleUrls: ['./moduloAdminCliente.component.css'],
})
export class ModuloAdminClienteComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  cliente: Cliente;

  recibirCliente(val: Cliente) {
    this.cliente = val;
  }
}
