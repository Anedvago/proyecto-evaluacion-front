import { Injectable } from '@angular/core';
import { UsuarioEnApp } from './UsuarioEnApp';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  constructor() {}

  userActivo: UsuarioEnApp;

  estUserSesion(user: UsuarioEnApp) {
    this.userActivo = user;
  }

  usuarioLogeado(): UsuarioEnApp {
    return this.userActivo;
  }
}
