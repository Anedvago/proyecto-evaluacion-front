import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { UsuarioEnApp } from './UsuarioEnApp';
import { UsuarioEnLogin } from './UsuarioEnLogin';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServicioService {
  constructor(private clienteHttp: HttpClient) {}

  private url = 'http://localhost:8080/api/usuarios';

  loginUsuario(user: UsuarioEnLogin): Observable<UsuarioEnApp> {
    return this.clienteHttp.post<UsuarioEnApp>(this.url + '/login', user);
  }

  obtenerUsuarios(): Observable<UsuarioEnApp[]> {
    return this.clienteHttp.get<UsuarioEnApp[]>(this.url + '/usuarios');
  }

  agregarNuevo(usuario: UsuarioEnApp) {
    return this.clienteHttp.post(this.url + '/registro-usuarios', usuario);
  }

  modificar(usuario: UsuarioEnApp) {
    return this.clienteHttp.put(
      this.url + '/usuario/' + usuario.idUsuario,
      usuario
    );
  }

  eliminar(id: number) {
    return this.clienteHttp.delete(this.url + '/usuario/' + id);
  }
}
