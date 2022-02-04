import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { UsuarioEnApp } from '../UsuarioEnApp';
import { UsuarioServicioService } from '../usuarioServicio.service';

@Component({
  selector: 'app-formularioUsuarios',
  templateUrl: './formularioUsuarios.component.html',
  styleUrls: ['./formularioUsuarios.component.css'],
})
export class FormularioUsuariosComponent implements OnInit {
  @Output() enviaruserAdd = new EventEmitter<UsuarioEnApp>();
  userNew: UsuarioEnApp;

  @Input() public set usuarioEnviar(val: UsuarioEnApp) {
    if (val) {
      this.userNew = val;

      this.idUsuario = val.idUsuario;
      this.nombre = val.nombre;
      this.apellido = val.apellido;
      this.usuario = val.usuario;
      this.contrasena = val.contraseña;
      this.perfil = val.perfil;

      this.tipo = 'modificar';
    } else {
      this.tipo = 'añadir';
    }
  }

  constructor(private serv: UsuarioServicioService) {}

  ngOnInit() {}

  tipo: string;

  idUsuario: number;
  nombre: string;
  apellido: string;
  usuario: string;
  contrasena: string;
  perfil: string;

  agregarNuevo() {
    let user: UsuarioEnApp = new UsuarioEnApp(
      this.idUsuario,
      this.nombre,
      this.apellido,
      this.usuario,
      this.contrasena,
      this.perfil
    );

    this.serv.agregarNuevo(user).subscribe((dato) => {
      user.idUsuario = dato.idUsuario;
    });
    this.enviaruserAdd.emit(user);
    this.nombre = '';
    this.apellido = '';
    this.usuario = '';
    this.contrasena = '';
    this.perfil = '';
  }
}
