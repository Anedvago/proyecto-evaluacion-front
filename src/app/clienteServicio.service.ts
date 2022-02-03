import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';
import { TipoIdentificacion } from './TipoIdentificacion';

@Injectable({
  providedIn: 'root',
})
export class ClienteServicioService {
  constructor(private clienteHttp: HttpClient) {}

  private url = 'http://localhost:8080/api/clientes';

  obtenerClientes(): Observable<Cliente[]> {
    return this.clienteHttp.get<Cliente[]>(this.url + '/clientes');
  }

  obtenerUnCliente(tipo: number, iden: string): Observable<Cliente> {
    return this.clienteHttp.get<Cliente>(
      this.url + '/cliente/' + tipo + '/' + iden
    );
  }

  obetenerTiposIden(): Observable<TipoIdentificacion[]> {
    return this.clienteHttp.get<TipoIdentificacion[]>(
      this.url + '/tipos-identificaciones'
    );
  }

  agregarNuevo(cliente: Cliente) {
    return this.clienteHttp.post(this.url + '/registro-clientes', cliente);
  }

  modificar(cliente: Cliente) {
    return this.clienteHttp.put(
      this.url + '/cliente/' + cliente.cliente,
      cliente
    );
  }

  eliminar(id: number) {
    return this.clienteHttp.delete(this.url + '/cliente/' + id);
  }
}
