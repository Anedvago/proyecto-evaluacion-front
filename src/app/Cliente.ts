import { TipoIdentificacion } from './TipoIdentificacion';

export class Cliente {
  cliente: number;
  tipoIdentificacion: TipoIdentificacion;
  identificacion: string;
  razonSocial: string;
  fechaRegistro: Date;
  estado: string;

  constructor(
    idCliente: number,
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
    this.cliente = idCliente;
  }
}
