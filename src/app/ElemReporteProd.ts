export class ElemReporteProd {
  idProd: number;
  nombreProd: string;
  cantidad: number;
  valorUni: number;
  mes: string;

  constructor(
    idProd: number,
    nombreProd: string,
    cantidad: number,
    valorUni: number,
    mes: number
  ) {
    this.idProd = idProd;
    this.nombreProd = nombreProd;
    this.cantidad = cantidad;
    this.valorUni = valorUni;
    switch (mes) {
      case 1:
        this.mes = 'Enero';
        break;
      case 2:
        this.mes = 'Febrero';
        break;
      case 3:
        this.mes = 'Marzo';
        break;
      case 4:
        this.mes = 'Abril';
        break;
      case 5:
        this.mes = 'Mayo';
        break;
      case 6:
        this.mes = 'Junio';
        break;
      case 7:
        this.mes = 'Julio';
        break;
      case 8:
        this.mes = 'Agosto';
        break;
      case 9:
        this.mes = 'Septiembre';
        break;
      case 10:
        this.mes = 'Octubre';
        break;
      case 11:
        this.mes = 'Noviembre';
        break;
      case 12:
        this.mes = 'Diciembre';
        break;

      default:
        break;
    }
  }
}
