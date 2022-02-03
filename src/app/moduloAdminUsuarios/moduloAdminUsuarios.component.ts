import { Component, OnInit } from '@angular/core';
import { UsuarioEnApp } from '../UsuarioEnApp';

@Component({
  selector: 'app-moduloAdminUsuarios',
  templateUrl: './moduloAdminUsuarios.component.html',
  styleUrls: ['./moduloAdminUsuarios.component.css'],
})
export class ModuloAdminUsuariosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  usuario: UsuarioEnApp;
  recibirUsuario(val: UsuarioEnApp) {
    this.usuario = val;
  }
}
