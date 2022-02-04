import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../detalle.service';
import { ElemReporteCli } from '../ElemReporteCli';

@Component({
  selector: 'app-reporteClientes',
  templateUrl: './reporteClientes.component.html',
  styleUrls: ['./reporteClientes.component.css'],
})
export class ReporteClientesComponent implements OnInit {
  constructor(private serv: DetalleService) {}

  ngOnInit() {
    this.serv.obtenerReporteCli().subscribe((dato) => {
      for (let i = 0; i < dato.length; i++) {
        let detalle: ElemReporteCli = new ElemReporteCli(
          dato[i][0],
          dato[i][1],
          dato[i][2],
          dato[i][3]
        );
        this.detallesReporte.push(detalle);
      }
    });
  }

  detallesReporte: ElemReporteCli[] = [];
}
