import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClienteServicioService } from '../clienteServicio.service';
import { TipoIdentificacion } from '../TipoIdentificacion';

@Component({
  selector: 'app-buscadorClientes',
  templateUrl: './buscadorClientes.component.html',
  styleUrls: ['./buscadorClientes.component.css'],
})
export class BuscadorClientesComponent implements OnInit {
  @Output() enviarCliente = new EventEmitter<Cliente>();

  constructor(private serv: ClienteServicioService) {}

  ngOnInit() {
    this.serv.obetenerTiposIden().subscribe((dato) => {
      this.tiposIden = dato;
    });
  }
  tiposIden: TipoIdentificacion[];
  tipoIdId: number;
  id: string;
  cliente: Cliente;
  mensaje: string = '';

  buscarCliente() {
    this.serv.obtenerUnCliente(this.tipoIdId, this.id).subscribe(
      (dato) => {
        this.cliente = dato;
        this.mensaje =
          'Identificacion: ' +
          this.cliente.identificacion +
          ' Razon social: ' +
          this.cliente.razonSocial;
        this.enviarCliente.emit(this.cliente);
      },
      (error) => {
        this.mensaje = 'no encontrado';
      }
    );
  }
}
