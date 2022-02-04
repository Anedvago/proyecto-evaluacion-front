import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuloAdminComponent } from './moduloAdmin/moduloAdmin.component';
import { ModuloCajeroComponent } from './moduloCajero/moduloCajero.component';
import { BarraNavegacionComponent } from './barraNavegacion/barraNavegacion.component';
import { ModuloAdminClienteComponent } from './moduloAdminCliente/moduloAdminCliente.component';
import { TablaClientesComponent } from './tablaClientes/tablaClientes.component';
import { FormularioClientesComponent } from './formularioClientes/formularioClientes.component';
import { ModuloAdminProductosComponent } from './moduloAdminProductos/moduloAdminProductos.component';
import { FormularioProductosComponent } from './formularioProductos/formularioProductos.component';
import { TablaProductosComponent } from './tablaProductos/tablaProductos.component';
import { ModuloAdminUsuariosComponent } from './moduloAdminUsuarios/moduloAdminUsuarios.component';
import { FormularioUsuariosComponent } from './formularioUsuarios/formularioUsuarios.component';
import { TablaUsuariosComponent } from './tablaUsuarios/tablaUsuarios.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { BuscadorClientesComponent } from './buscadorClientes/buscadorClientes.component';
import { BuscadorProductosComponent } from './buscadorProductos/buscadorProductos.component';
import { FormCantProdComponent } from './formCantProd/formCantProd.component';
import { FacturaPDFComponent } from './FacturaPDF/FacturaPDF.component';
import { ReporteProductosComponent } from './reporteProductos/reporteProductos.component';
import { ReporteClientesComponent } from './reporteClientes/reporteClientes.component';

@NgModule({
  declarations: [								
    AppComponent,
    LoginComponent,
    ModuloAdminComponent,
    ModuloCajeroComponent,
    BarraNavegacionComponent,
    ModuloAdminClienteComponent,
    TablaClientesComponent,
    FormularioClientesComponent,
    ModuloAdminProductosComponent,
    FormularioProductosComponent,
    TablaProductosComponent,
    ModuloAdminUsuariosComponent,
    FormularioUsuariosComponent,
      TablaUsuariosComponent,
      FacturacionComponent,
      BuscadorClientesComponent,
      BuscadorProductosComponent,
      FormCantProdComponent,
      FacturaPDFComponent,
      ReporteProductosComponent,
      ReporteClientesComponent
   ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
