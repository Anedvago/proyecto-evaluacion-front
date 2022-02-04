import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { UsuarioEnApp } from '../UsuarioEnApp';
import { UsuarioServicioService } from '../usuarioServicio.service';

@Component({
  selector: 'app-tablaUsuarios',
  templateUrl: './tablaUsuarios.component.html',
  styleUrls: ['./tablaUsuarios.component.css'],
})
export class TablaUsuariosComponent implements OnInit {
  @Output() enviarUsuario = new EventEmitter<UsuarioEnApp>();
  @Input() usuarios: UsuarioEnApp[];

  constructor(private serv: UsuarioServicioService) {}

  ngOnInit() {}

  cargarDatosDelUsuario(id: number) {
    this.enviarUsuario.emit(this.usuarios.find((i) => i.idUsuario === id));
  }

  eliminarUsuario(id: number) {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].idUsuario == id) {
        this.usuarios.splice(i, 1);
      }
    }
    this.serv.eliminar(id).subscribe((dato) => {});
  }
}
