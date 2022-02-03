export class TipoIdentificacion {
  tipoIdentificacion: number;
  abreviatura: string;
  descripcion: string;

  constructor(
    tipoIdentificacion: number,
    abreviatura: string,
    descripcion: string
  ) {
    this.tipoIdentificacion = tipoIdentificacion;
    this.abreviatura = abreviatura;
    this.descripcion = descripcion;
  }
}
