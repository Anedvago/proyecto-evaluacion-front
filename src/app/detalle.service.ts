import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalle } from './Detalle';
import { ElemReporteProd } from './ElemReporteProd';

@Injectable({
  providedIn: 'root',
})
export class DetalleService {
  constructor(private clienteHttp: HttpClient) {}
  private url = 'http://localhost:8080/api/detalles';

  agregarNuevo(detalle: Detalle) {
    return this.clienteHttp.post(this.url + '/registro-detalles', detalle);
  }

  obtenerReporteProd(): Observable<[]> {
    return this.clienteHttp.get<[]>(this.url + '/reporte-productos');
  }

  obtenerReporteCli(): Observable<[]> {
    return this.clienteHttp.get<[]>(this.url + '/reporte-clientes');
  }
}
