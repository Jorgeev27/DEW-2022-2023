/* Importando los módulos necesarios para el funcionamiento del servicio. */
import { Injectable } from "@angular/core";
import { Personajes } from "../model/personajes";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";

/* Un decorador que le dice a Angular que este servicio debe ser creado por el inyector de la
aplicación raíz. */
@Injectable({
    providedIn: 'root',
})

export class PersonajesService{

    /* Crear una matriz vacía de Personajes. */
    personaj: Personajes[] = [];

    /* Una variable que se utilizará para almacenar los datos que devolverá el servicio. */
    pers$?:Observable<Personajes[]>;

    /**
     * La función constructora es una función especial que se llama cuando se crea una nueva instancia
     * de la clase.
     * @param {HttpClient} http - Cliente Http
     */
    constructor(private http:HttpClient){
        this.obtenerPersonajes();
        this.pers$=of(this.personaj);
    }

    /**
     * Obtiene los datos de la API y luego los agrega a la matriz de personajes.
     */
    obtenerPersonajes(){
        this.http.get<any>('https://zelda.fanapis.com/api/characters').subscribe(data => {
            data.data.forEach((element:Personajes)=> {
                this.agregarPersonajes(element);
            });
        });
    }

    /**
     * La función toma un objeto personajes, lo empuja a la matriz personaj y luego establece el pers$
     * observable en la matriz personaj
     * @param {Personajes} personajes - Personajes
     */
    agregarPersonajes(personajes: Personajes){
        this.personaj.push(personajes);
        this.pers$ = of(this.personaj);
    }

    /**
     * Devuelve una suscripción al observable que devuelve la función getPers()
     * @returns lo observable
     */
    tenerPersonajes(){
        return this.pers$?.subscribe((data) => {
            return data;
        })
    }

    actualizarPersonaje(id: number, pers: Personajes){
        let persoModificar = this.borrarPersonaje(id);
    }

    /**
     * La función toma una identificación como argumento y devuelve el objeto personaj que tiene la
     * misma identificación que el argumento.
     * @param {number} id - número
     * @returns el valor de la variable personejeEncontrado.
     */
    buscarPersonaje(id: number){
        let personejeEncontrado = this.personaj.find((buscarPers) => buscarPers.id === id);
        return personejeEncontrado;
    }

    /**
     * La función toma una identificación como parámetro, luego filtra la matriz personaj para eliminar
     * el elemento con la identificación coincidente
     * @param {number} id - número
     */
    borrarPersonaje(id: number){
        this.personaj = this.personaj.filter((element) => element.id !== id);
        this.pers$ = of(this.personaj);
    }
}