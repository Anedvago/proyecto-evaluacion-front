import { Component, OnInit } from '@angular/core';
import { UsuarioEnApp } from '../UsuarioEnApp';
import { UsuarioServicioService } from '../usuarioServicio.service';

@Component({
  selector: 'app-moduloAdminUsuarios',
  templateUrl: './moduloAdminUsuarios.component.html',
  styleUrls: ['./moduloAdminUsuarios.component.css'],
})
export class ModuloAdminUsuariosComponent implements OnInit {
  constructor(private serv: UsuarioServicioService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  usuario: UsuarioEnApp;
  usuarios: UsuarioEnApp[];

  recibirUsuario(val: UsuarioEnApp) {
    this.usuario = val;
  }
  cargarUsuarios() {
    this.serv.obtenerUsuarios().subscribe((dato) => {
      this.usuarios = dato;
    });
  }

  recibirUserAdd(val: UsuarioEnApp) {
    let exist: boolean = false;
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].idUsuario == val.idUsuario) {
        this.usuarios[i] = val;
        exist = true;
      }
    }
    if (!exist) {
      this.usuarios.push(val);
    }
  }
}
