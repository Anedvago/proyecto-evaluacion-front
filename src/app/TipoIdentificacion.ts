export class TipoIdentificacion {
  id: number;
  abreviatura: string;
  descripcion: string;

  constructor(id: number, abreviatura: string, descripcion: string) {
    this.id = id;
    this.abreviatura = abreviatura;
    this.descripcion = descripcion;
  }
}
