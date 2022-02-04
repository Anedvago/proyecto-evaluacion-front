import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReporteProductosService {
  constructor(private clienteHttp: HttpClient) {}

  private url = 'http://localhost:8080/api/detalles';
}
