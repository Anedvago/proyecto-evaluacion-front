import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioEnApp } from '../UsuarioEnApp';
import { UsuarioEnLogin } from '../UsuarioEnLogin';
import { UsuarioServicioService } from '../usuarioServicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private serv: UsuarioServicioService, private router: Router) {}

  ngOnInit() {}

  nombre: string;
  contrasena: string;

  usu: UsuarioEnApp;

  ingresar() {
    let userLogin: UsuarioEnLogin = new UsuarioEnLogin(
      this.nombre,
      this.contrasena
    );

    this.serv.loginUsuario(userLogin).subscribe(
      (dato) => {
        this.usu = dato;
        if (this.usu.usuario === 'Administrador') {
          this.router.navigate(['admin']);
        } else if (this.usu.usuario === 'Cajero') {
          this.router.navigate(['cajero']);
        }
      },
      (error) => {
        alert('La contraseña o el usuario es incorrecto');
      }
    );
  }
}
