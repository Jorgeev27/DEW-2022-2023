import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-card-marvel',
  templateUrl: './card-marvel.component.html',
})
export class CardMarvelComponent implements OnInit {
  ngOnInit(): void {
    
  }
}
