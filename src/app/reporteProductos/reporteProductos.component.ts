import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../detalle.service';

@Component({
  selector: 'app-reporteProductos',
  templateUrl: './reporteProductos.component.html',
  styleUrls: ['./reporteProductos.component.css'],
})
export class ReporteProductosComponent implements OnInit {
  constructor(private serv: DetalleService) {}

  ngOnInit() {
    this.serv.obtenerReporteProd().subscribe((dato) => {
      console.log(dato);
    });
  }
}
