import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'fasePelicula'
})

export class FaseUniversoPeliculaPipe implements PipeTransform{
    transform(fecha: string) {
        let fechasPelicula = fecha.split("/");
        let fechaDePelicula = parseInt(fechasPelicula[0]);
        let fasePelicula: string = "0";
        if(fechaDePelicula <= 2012){
            fasePelicula = "1";
        }else if(fechaDePelicula >= 2013 && fechaDePelicula <= 2015){
            fasePelicula = "2";
        }else if(fechaDePelicula >= 2016 && fechaDePelicula <= 2019){
            fasePelicula = "3";
        }else if(fechaDePelicula >= 2020 && fechaDePelicula <= 2022){
            fasePelicula = "4";
        }else{
            fasePelicula = "ERROR!! Fase de pelícuña desconocida";
        }
        return fasePelicula;
    }
}