export class UsuarioEnApp {
  idUsuario: number;
  nombre: string;
  apellido: string;
  usuario: string;
  contraseña: string;
  perfil: string;

  constructor(
    idUsuario: number,
    nombre: string,
    apellido: string,
    usuario: string,
    contraseña: string,
    perfil: string
  ) {
    this.idUsuario = idUsuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.perfil = perfil;
  }
}
