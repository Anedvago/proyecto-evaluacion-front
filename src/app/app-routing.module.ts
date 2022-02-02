import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModuloAdminComponent } from './moduloAdmin/moduloAdmin.component';
import { ModuloAdminClienteComponent } from './moduloAdminCliente/moduloAdminCliente.component';
import { ModuloCajeroComponent } from './moduloCajero/moduloCajero.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: ModuloAdminComponent },
  { path: 'cajero', component: ModuloCajeroComponent },
  { path: 'admin/clientes', component: ModuloAdminClienteComponent },
  { path: 'admin/productos', component: ModuloCajeroComponent },
  { path: 'admin/usuarios', component: ModuloCajeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
