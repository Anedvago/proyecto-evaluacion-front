import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClienteServicioService } from '../clienteServicio.service';
import { TablaClientesComponent } from '../tablaClientes/tablaClientes.component';
import { TipoIdentificacion } from '../TipoIdentificacion';

@Component({
  selector: 'app-formularioClientes',
  templateUrl: './formularioClientes.component.html',
  styleUrls: ['./formularioClientes.component.css'],
})
export class FormularioClientesComponent implements OnInit {
  @Output() enviarClienteAdd = new EventEmitter<Cliente>();
  tipo: string;
  @Input() public set clienteEnviar(val: Cliente) {
    if (val) {
      this.idCliente = val.cliente;
      this.tipoIdId = val.tipoIdentificacion.tipoIdentificacion;
      this.tipoId = val.tipoIdentificacion;
      this.id = val.identificacion;
      this.razonSocial = val.razonSocial;
      this.estado = val.estado;

      this.tipo = 'modificar';
    } else {
      this.tipo = 'añadir';
    }
  }

  constructor(private serv: ClienteServicioService, private router: Router) {}

  ngOnInit() {
    this.serv.obetenerTiposIden().subscribe((dato) => {
      this.tiposIden = dato;
    });
  }

  tiposIden: TipoIdentificacion[];
  tipoIdId: number;
  tipoId: TipoIdentificacion;
  id: string = '';
  razonSocial: string;
  fechaRegistro: Date;
  estado: string;
  idCliente: number;

  agregarCliente() {
    this.tipoId = this.tiposIden.find(
      (i) => i.tipoIdentificacion == this.tipoIdId
    )!;
    let cliente: Cliente = new Cliente(
      0,
      this.tipoId,
      this.id,
      this.razonSocial,
      this.fechaRegistro,
      this.estado
    );

    this.serv.agregarNuevo(cliente).subscribe((dato) => {
      cliente.cliente = dato.cliente;
    });
    this.enviarClienteAdd.emit(cliente);

    this.id = '';
    this.razonSocial = '';
    this.fechaRegistro;
    this.estado = '';
  }

  actualizar() {
    this.tipoId = this.tiposIden.find(
      (i) => i.tipoIdentificacion == this.tipoIdId
    )!;
    let cliente: Cliente = new Cliente(
      this.idCliente,
      this.tipoId,
      this.id,
      this.razonSocial,
      this.fechaRegistro,
      this.estado
    );
    this.enviarClienteAdd.emit(cliente);
    this.serv.modificar(cliente).subscribe((dato) => {});
    this.id = '';
    this.razonSocial = '';
    this.fechaRegistro;
    this.estado = '';
  }
}
