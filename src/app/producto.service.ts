import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private clienteHttp: HttpClient) {}
  private url = 'http://localhost:8080/api/productos';

  obtenerProductos(): Observable<Producto[]> {
    return this.clienteHttp.get<Producto[]>(this.url + '/productos');
  }

  obtenerUnProducto(id: number): Observable<Producto> {
    return this.clienteHttp.get<Producto>(this.url + '/producto/' + id);
  }

  agregarNuevo(producto: Producto) {
    return this.clienteHttp.post(this.url + '/registro-productos', producto);
  }

  modificar(cliente: Producto) {
    return this.clienteHttp.put(this.url + '/producto/' + cliente.id, cliente);
  }

  eliminar(id: number) {
    return this.clienteHttp.delete(this.url + '/producto/' + id);
  }
}
