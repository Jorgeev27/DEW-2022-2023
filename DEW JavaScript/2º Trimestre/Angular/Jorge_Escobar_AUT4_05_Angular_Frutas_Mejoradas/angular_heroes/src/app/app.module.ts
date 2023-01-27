import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import FrutasComponent from './components/frutas/frutas.component';
import { FrutasDetallesComponent } from './components/frutas-detalles/frutas-detalles.component';
import { CrearFrutaComponent } from './components/crear-fruta/crear-fruta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FrutasComponent,
    FrutasDetallesComponent,
    CrearFrutaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
