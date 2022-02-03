import { Component, OnInit, Output } from '@angular/core';
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

  constructor(private serv: UsuarioServicioService) {
    this.cargarUsuarios();
  }

  ngOnInit() {}

  usuarios: UsuarioEnApp[];

  cargarUsuarios() {
    this.serv.obtenerUsuarios().subscribe((dato) => {
      this.usuarios = dato;
    });
  }

  cargarDatosDelUsuario(id: number) {
    this.enviarUsuario.emit(this.usuarios.find((i) => i.idUsuario === id));
  }

  eliminarUsuario(id: number) {
    this.serv.eliminar(id).subscribe((dato) => {});
    window.location.reload();
  }
}
