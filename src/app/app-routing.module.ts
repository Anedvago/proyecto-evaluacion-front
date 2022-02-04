import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './CanActivateGuard';
import { CanActivateLogin } from './canActivateLogin';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { LoginComponent } from './login/login.component';
import { ModuloAdminComponent } from './moduloAdmin/moduloAdmin.component';
import { ModuloAdminClienteComponent } from './moduloAdminCliente/moduloAdminCliente.component';
import { ModuloAdminProductosComponent } from './moduloAdminProductos/moduloAdminProductos.component';
import { ModuloAdminUsuariosComponent } from './moduloAdminUsuarios/moduloAdminUsuarios.component';
import { ModuloCajeroComponent } from './moduloCajero/moduloCajero.component';
import { ReporteProductosComponent } from './reporteProductos/reporteProductos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    canActivate: [CanActivateGuard],
    component: ModuloAdminComponent,
  },
  {
    path: 'cajero',
    canActivate: [CanActivateLogin],
    component: FacturacionComponent,
  },
  {
    path: 'admin/clientes',
    canActivate: [CanActivateGuard],
    component: ModuloAdminClienteComponent,
  },
  {
    path: 'admin/productos',
    canActivate: [CanActivateGuard],
    component: ModuloAdminProductosComponent,
  },
  {
    path: 'admin/usuarios',
    canActivate: [CanActivateGuard],
    component: ModuloAdminUsuariosComponent,
  },
  {
    path: 'admin/reportes-productos',
    canActivate: [CanActivateGuard],
    component: ReporteProductosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
