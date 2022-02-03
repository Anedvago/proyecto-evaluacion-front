import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { LoginComponent } from './login/login.component';
import { ModuloAdminComponent } from './moduloAdmin/moduloAdmin.component';
import { ModuloAdminClienteComponent } from './moduloAdminCliente/moduloAdminCliente.component';
import { ModuloAdminProductosComponent } from './moduloAdminProductos/moduloAdminProductos.component';
import { ModuloAdminUsuariosComponent } from './moduloAdminUsuarios/moduloAdminUsuarios.component';
import { ModuloCajeroComponent } from './moduloCajero/moduloCajero.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: ModuloAdminComponent },
  { path: 'cajero', component: FacturacionComponent },
  { path: 'admin/clientes', component: ModuloAdminClienteComponent },
  { path: 'admin/productos', component: ModuloAdminProductosComponent },
  { path: 'admin/usuarios', component: ModuloAdminUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
