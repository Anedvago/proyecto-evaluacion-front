import { TipoIdentificacion } from './TipoIdentificacion';

export class Cliente {
  tipoIdentificacion: TipoIdentificacion;
  identificacion: string;
  razonSocial: string;
  fechaRegistro: Date;
  estado: string;

  constructor(
    tipoIdentificacion: TipoIdentificacion,
    identificacion: string,
    razonSocial: string,
    fechaRegistro: Date,
    estado: string
  ) {
    this.tipoIdentificacion = tipoIdentificacion;
    this.identificacion = identificacion;
    this.razonSocial = razonSocial;
    this.fechaRegistro = fechaRegistro;
    this.estado = estado;
  }
}
