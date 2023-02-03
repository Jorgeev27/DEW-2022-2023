import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduccionMarvelComponent } from './components/introduccion-marvel/introduccion-marvel.component';
import { MainComponent } from './components/main/main.component';
import { PeliculasMarvelComponent } from './components/peliculas-marvel/peliculas-marvel.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'marvel', component: IntroduccionMarvelComponent},
  {path: 'listaPeliculas', component: PeliculasMarvelComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
