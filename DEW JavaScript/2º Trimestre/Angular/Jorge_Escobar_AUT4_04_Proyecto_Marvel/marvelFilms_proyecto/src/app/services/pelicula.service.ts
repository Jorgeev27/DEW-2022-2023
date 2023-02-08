import { Injectable } from "@angular/core";
import { Pelicula } from "../model/pelicula";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class PeliculaService{
    /* Declarando un array de tipo Pelicula. */
    movie: Pelicula[] = [];

    /* Variable que es un observable de un array de Pelicula. */
    peli$?:Observable<Pelicula[]>;

    /**
     * La función constructora es una función especial que se llama cuando se crea una nueva instancia de la clase.
     * @param {HttpClient} http - Cliente Http.
     */
    constructor(private http:HttpClient){
        this.obtenerPeliculas();
        this.peli$=of(this.movie);
    }

    /**
     * La función obtenerPeliculas() obtiene los datos de la API y luego los agrega al array de películas.
     */
    obtenerPeliculas(){
        this.http.get<any>('https://www.qando.es/docs/films.php').subscribe(data => {
            data.forEach((element:Pelicula )=> {
                this.agregarPeliculas(element);
            });
        });
    }

    /**
     * La función agregarPeliculas() toma un parámetro de tipo Pelicula y luego inserta ese parámetro en el array de películas.
     * @param {Pelicula} peli - Película.
     */
    agregarPeliculas(peli: Pelicula){
        this.movie.push(peli);
        this.peli$ = of(this.movie);
    }

    /**
     * La función borrarPeliculas() toma una identificación, luego filtra el array de películas para eliminar la
     * película con la identificación coincidente, luego establece el observable peli$ en el nuevo
     * array de películas y finalmente llama a la función obtenerPeliculas() para actualizar la vista.
     * @param {number} id - Identificador de la película a borrar
     */
    borrarPeliculas(id: number){
        this.movie = this.movie.filter((element) => element.id !== id)
        this.peli$ = of(this.movie);
        this.obtenerPeliculas();
    }
}