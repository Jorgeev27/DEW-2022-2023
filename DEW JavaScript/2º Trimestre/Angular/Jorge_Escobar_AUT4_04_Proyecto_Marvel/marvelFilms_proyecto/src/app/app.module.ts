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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IntroduccionMarvelComponent,
    HeaderComponent,
    FooterComponent,
    PeliculasMarvelComponent,
    SeriesMarvelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
