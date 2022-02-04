import {
  Component,
  Input,
  NgZone,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
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
  @Input() clientes: Cliente[];
  constructor(private ser: ClienteServicioService) {}

  ngOnInit() {}

  cargarDatosDeCliente(id: number) {
    this.enviarCliente.emit(this.clientes.find((i) => i.cliente === id));
  }

  eliminarCliente(id: number) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].cliente == id) {
        this.clientes.splice(i, 1);
      }
    }
    this.ser.eliminar(id).subscribe((dato) => {});
  }
}
