import { Perfil } from './Perfil';

export class UsuarioEnApp {
  idUsuario: number;
  nombre: string;
  apellido: string;
  usuario: string;
  contraseña: string;
  idPerfil: Perfil;

  constructor(
    idUsuario: number,
    nombre: string,
    apellido: string,
    usuario: string,
    contraseña: string,
    idPerfil: Perfil
  ) {
    this.idUsuario = idUsuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.idPerfil = idPerfil;
  }
}
