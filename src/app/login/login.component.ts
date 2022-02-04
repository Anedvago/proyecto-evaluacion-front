import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../sesion.service';
import { UsuarioEnApp } from '../UsuarioEnApp';
import { UsuarioEnLogin } from '../UsuarioEnLogin';
import { UsuarioServicioService } from '../usuarioServicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private serv: UsuarioServicioService,
    private router: Router,
    private autserv: SesionService
  ) {}

  ngOnInit() {}

  nombre: string;
  contrasena: string;

  usu: UsuarioEnApp;

  error: boolean = false;

  ingresar() {
    let userLogin: UsuarioEnLogin = new UsuarioEnLogin(
      this.nombre,
      this.contrasena
    );

    this.serv.loginUsuario(userLogin).subscribe(
      (dato) => {
        this.usu = dato;
        this.autserv.estUserSesion(this.usu);
        if (this.usu.perfil === 'Administrador') {
          this.router.navigate(['admin']);
        } else if (this.usu.perfil === 'Cajero') {
          this.router.navigate(['cajero']);
        }
      },
      (error) => {
        this.error = true;
      }
    );
  }
}
