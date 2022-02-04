import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../detalle.service';
import { ElemReporteProd } from '../ElemReporteProd';

@Component({
  selector: 'app-reporteProductos',
  templateUrl: './reporteProductos.component.html',
  styleUrls: ['./reporteProductos.component.css'],
})
export class ReporteProductosComponent implements OnInit {
  constructor(private serv: DetalleService) {}

  ngOnInit() {
    this.serv.obtenerReporteProd().subscribe((dato) => {
      for (let i = 0; i < dato.length; i++) {
        let detalle: ElemReporteProd = new ElemReporteProd(
          dato[i][0],
          dato[i][1],
          dato[i][2],
          dato[i][3],
          dato[i][4]
        );
        this.detallesReporte.push(detalle);
      }
    });
  }

  detallesReporte: ElemReporteProd[] = [];
}
