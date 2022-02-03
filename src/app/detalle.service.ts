import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detalle } from './Detalle';

@Injectable({
  providedIn: 'root',
})
export class DetalleService {
  constructor(private clienteHttp: HttpClient) {}
  private url = 'http://localhost:8080/api/detalles';

  agregarNuevo(detalle: Detalle) {
    return this.clienteHttp.post(this.url + '/registro-detalles', detalle);
  }
}
