import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteServicioService {
  constructor(private clienteHttp: HttpClient) {}

  private url = 'http://localhost:8080/api/clientes';

  obtenerClientes(): Observable<Cliente[]> {
    return this.clienteHttp.get<Cliente[]>(this.url + '/clientes');
  }
}
