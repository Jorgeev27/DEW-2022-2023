/* Importación de los componentes, servicios y modelos necesarios. */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personajes } from 'src/app/model/personajes';
import { PersonajesService } from 'src/app/services/personajes.service';


@Component({
  selector: 'app-detalles-personaje',
  templateUrl: './detalles-personaje.component.html',
})


export class DetallesPersonajeComponent implements OnInit{
  /* Creando un nuevo objeto de tipo Personajes. */
  personajeAEditar: Personajes = {id: 0, name: "", gender: "", description: ""};

  id: number = 2;
  name: string = "";
  gender: string = "";
  description: string = "";
  editar: boolean = false;

  personajeSeleccionado: Personajes = {id: 0, name: "", gender: "", description: ""};

/**
 * Un constructor que se utiliza para inicializar la clase.
 * @param {ActivatedRoute} route - Este es el servicio ActivatedRoute.
 * @param {PersonajesService} servicePerso - PersonajesServicio
 */
  constructor(private route:ActivatedRoute, private servicePerso: PersonajesService){}

  /**
   * La función ngOnInit() es un gancho de ciclo de vida. Angular llama a ngOnInit() poco después de
   * crear un componente. Es un buen lugar para poner la lógica de inicialización.
   */
  ngOnInit(): void {
    this.obtenerPersonaje();
  }

  /**
   * Obtiene la identificación del carácter que se va a editar de la URL y luego busca el carácter en
   * el servicio.
   */
  obtenerPersonaje(){
    let personajeId = Number(this.route.snapshot.paramMap.get('id'));
    //this.personajeAEditar = this.servicePerso.buscarPersonaje(personajeId);
    this.id = this.personajeAEditar.id;
    this.name = this.personajeAEditar.name;
    this.gender = this.personajeAEditar.gender;
  }
}