import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPersonajeComponent } from './components/detalles-personaje/detalles-personaje.component';
import { MainComponent } from './components/main/main.component';
import { PersonajesMockStarwarsComponent } from './components/personajes-mock-starwars/personajes-mock-starwars.component';
import { PersonajesStarwarsApiComponent } from './components/personajes-starwars-api/personajes-starwars-api.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'personajesMockStarwars', component: PersonajesMockStarwarsComponent},
  {path: 'personajesStarwarsApi', component: PersonajesStarwarsApiComponent},
  {path: 'detallesPersonaje/:id', component: DetallesPersonajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
