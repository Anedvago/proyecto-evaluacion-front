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

@NgModule({
  declarations: [			
    AppComponent,
    LoginComponent,
    ModuloAdminComponent,
    ModuloCajeroComponent,
    BarraNavegacionComponent,
      ModuloAdminClienteComponent,
      TablaClientesComponent,
      FormularioClientesComponent
   ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
