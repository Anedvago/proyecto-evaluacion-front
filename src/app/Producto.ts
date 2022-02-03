export class Producto {
  id: number;
  nombre: string;
  estado: string;
  valorUnitario: number;

  constructor(
    id: number,
    nombre: string,
    estado: string,
    valorUnitario: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.estado = estado;
    this.valorUnitario = valorUnitario;
  }
}
