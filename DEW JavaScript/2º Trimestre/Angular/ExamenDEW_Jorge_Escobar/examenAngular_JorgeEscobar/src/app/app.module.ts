import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { PersonajesMockStarwarsComponent } from './components/personajes-mock-starwars/personajes-mock-starwars.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonajesStarwarsApiComponent } from './components/personajes-starwars-api/personajes-starwars-api.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallesPersonajeComponent } from './components/detalles-personaje/detalles-personaje.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PersonajesMockStarwarsComponent,
    PersonajesStarwarsApiComponent,
    DetallesPersonajeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
