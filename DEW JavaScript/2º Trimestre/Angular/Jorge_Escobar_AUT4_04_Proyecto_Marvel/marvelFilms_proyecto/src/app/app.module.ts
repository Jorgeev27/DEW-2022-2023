/* Importando los módulos que necesitamos usar en nuestra aplicación. */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { IntroduccionMarvelComponent } from './components/introduccion-marvel/introduccion-marvel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeliculasMarvelComponent } from './components/peliculas-marvel/peliculas-marvel.component';
import { HttpClientModule } from '@angular/common/http';
import { SeriesMarvelComponent } from './components/series-marvel/series-marvel.component';
import { DetallePeliculaMarvelComponent } from './components/detalle-pelicula-marvel/detalle-pelicula-marvel.component';
import { CrearPeliculaMarvelComponent } from './components/crear-pelicula-marvel/crear-pelicula-marvel.component';
import { FaseUniversoPeliculaPipe } from './pipes/fasePelicula.pipe';
import { CaracterEspecialPeliculaPipe } from './pipes/caracterEspecialPelicula.pipe';

/* El módulo principal de la aplicación. */
@NgModule({
  /* Declarando todos los componentes que vamos a utilizar en nuestra aplicación. */
  declarations: [
    AppComponent,
    MainComponent,
    IntroduccionMarvelComponent,
    HeaderComponent,
    FooterComponent,
    PeliculasMarvelComponent,
    SeriesMarvelComponent,
    DetallePeliculaMarvelComponent,
    CrearPeliculaMarvelComponent,
    FaseUniversoPeliculaPipe,
    CaracterEspecialPeliculaPipe
  ],
  /* Importando los módulos que necesitamos usar en nuestra aplicación. */
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  /* Una lista de servicios que están disponibles para toda la aplicación. */
  providers: [],
  /* Decirle a Angular que AppComponent es el componente raíz de la aplicación. */
  bootstrap: [AppComponent]
})
export class AppModule {}