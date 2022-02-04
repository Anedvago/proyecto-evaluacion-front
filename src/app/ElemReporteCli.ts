export class ElemReporteCli {
  ano: number;
  idCli: number;
  nombre: string;
  valor: number;

  constructor(ano: number, idCli: number, nombre: string, valor: number) {
    this.ano = ano;
    this.idCli = idCli;
    this.nombre = nombre;
    this.valor = valor;
  }
}
