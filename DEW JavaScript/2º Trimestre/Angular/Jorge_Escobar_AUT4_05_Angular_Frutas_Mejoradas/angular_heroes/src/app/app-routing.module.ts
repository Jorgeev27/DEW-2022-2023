import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearFrutaComponent } from './components/crear-fruta/crear-fruta.component';

const routes: Routes = [
  {path: "crear-fruta",component: CrearFrutaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
