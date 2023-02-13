/* Importando los módulos necesarios para el funcionamiento del servicio. */
import { Injectable } from "@angular/core";
import { Pelicula } from "../model/pelicula";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";

/* Un decorador que le dice a Angular que este servicio debe ser creado por el inyector de la
aplicación raíz. */
@Injectable({
    providedIn: 'root',
})

/* Exportando la clase PeliculaService. */
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
        this.http.get<any>('https://mcuapi.herokuapp.com/api/v1/movies').subscribe(data => {
            data.data.forEach((element:Pelicula)=> {
                this.agregarPeliculas(element);
            });
        });
    }

    /**
     * La función agregarPeliculas() toma un parámetro de tipo Pelicula y luego inserta ese parámetro en el array de películas.
     * @param {Pelicula} peli - Película.
     */
    agregarPeliculas(peli: Pelicula){
        if(this.movie.find(element => peli === element)){
            alert("ERROR!!! Pelicula con mismo ID");
        }else{
            this.movie.push(peli);
            this.peli$ = of(this.movie);
        }
    }

    /**
     * La función tenerPeliculas() devuelve los datos del observable.
     * @returns Datos del observable.
     */
    tenerPeliculas(){
        return this.peli$?.subscribe((data) => {
            return data;
        })
    }

    /**
     * La función actualizarPelicula() toma una identificación y un objeto de Pelicula, luego encuentra la película con la
     * identificación dada y luego actualiza la película con el objeto de Pelicula dado.
     * @param {number} id - ID de la película.
     * @param {Pelicula} peliMovie - Película.
     */
    actualizarPelicula(id: number, peliMovie: Pelicula){
        let peliculaModificar = this.buscarPelicula(id);
        peliculaModificar.title = peliMovie.title;
        peliculaModificar.release_date = peliMovie.release_date;
        peliculaModificar.overview = peliMovie.overview;
        peliculaModificar.cover_url = peliMovie.cover_url;
        this.peli$ = of(this.movie);
        this.tenerPeliculas();
    }

    /**
     * La función borrarPeliculas() toma una identificación, luego filtra el array de películas para eliminar la
     * película con la identificación coincidente, luego establece el observable peli$ en el nuevo
     * array de películas y finalmente llama a la función obtenerPeliculas() para actualizar la vista.
     * @param {number} id - ID de la película a borrar.
     */
    borrarPeliculas(id: number){
        this.movie = this.movie.filter((element) => element.id !== id)
        this.peli$ = of(this.movie);
        
    }

    /**
     * La función buscarPelicula() toma un número de identificación como argumento y devuelve el objeto de película que
     * tiene el mismo número de identificación que el argumento.
     * @param {number} id - ID de la película que se encuentra.
     * @returns Película que se encontró.
     */
    buscarPelicula(id: number){
        let peliculaEncontrada = this.movie.find((buscaPeli) => buscaPeli.id === id)!;
        return peliculaEncontrada;
    }

    /**
     * La función cogerId() devuelve la identificación de la última película en el array.
     * @returns Último elemento del array.
     */
    cogerId(){
        return this.movie[this.movie.length -1].id;
    }
}