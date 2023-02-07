import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPeliculaMarvelComponent } from './components/crear-pelicula-marvel/crear-pelicula-marvel.component';
import { DetallePeliculaMarvelComponent } from './components/detalle-pelicula-marvel/detalle-pelicula-marvel.component';
import { IntroduccionMarvelComponent } from './components/introduccion-marvel/introduccion-marvel.component';
import { MainComponent } from './components/main/main.component';
import { PeliculasMarvelComponent } from './components/peliculas-marvel/peliculas-marvel.component';
import { SeriesMarvelComponent } from './components/series-marvel/series-marvel.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'marvel', component: IntroduccionMarvelComponent},
  {path: 'listaPeliculas', component: PeliculasMarvelComponent},
  {path: 'listaSeries', component: SeriesMarvelComponent},
  {path: 'detallesPelicula', component: DetallePeliculaMarvelComponent},
  {path: 'crearPelicula', component: CrearPeliculaMarvelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
