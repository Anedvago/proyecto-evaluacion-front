import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from './Factura';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root',
})
export class FacturaService {
  constructor(private clienteHttp: HttpClient) {}

  private url = 'http://localhost:8080/api/facturas';

  agregarNueva(factura: Factura): Observable<Factura> {
    return this.clienteHttp.post<Factura>(
      this.url + '/registro-facturas',
      factura
    );
  }

  obtenerUlt() {
    return this.clienteHttp.get(this.url + '/factura/ultima');
  }
}
