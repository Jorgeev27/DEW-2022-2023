import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardMarvelComponent } from './components/card-marvel/card-marvel.component';

const routes: Routes = [
  {path: 'listaPeliculas', component: CardMarvelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
