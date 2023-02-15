import { Component } from '@angular/core';
import { PERSONAJES } from 'src/app/mock/mock-personajes.mock';

@Component({
  selector: 'app-personajes-mock-starwars',
  templateUrl: './personajes-mock-starwars.component.html'
})
export class PersonajesMockStarwarsComponent {
  person = PERSONAJES;

}
