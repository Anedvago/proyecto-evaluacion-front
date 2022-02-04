import { Component, Input, OnInit } from '@angular/core';
import { ArticuloFact } from '../ArticuloFact';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-FacturaPDF',
  templateUrl: './FacturaPDF.component.html',
  styleUrls: ['./FacturaPDF.component.css'],
})
export class FacturaPDFComponent implements OnInit {
  @Input() numFactura: number;
  @Input() idTitu: string;
  @Input() titu: string;
  @Input() fecha: Date;
  @Input() productos: ArticuloFact[];
  @Input() total: number;
  constructor() {}

  ngOnInit() {}

  imprimirFactura() {
    const datos = document.getElementById('htmlData')!;
    console.log(datos);

    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3,
    };
    html2canvas(datos, options)
      .then((canvas) => {
        const img = canvas.toDataURL('image/PNG');
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(
          img,
          'PNG',
          bufferX,
          bufferY,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
        return doc;
      })
      .then((docResult) => {
        docResult.save('Factura' + this.numFactura + '.pdf');
      });
  }
}
