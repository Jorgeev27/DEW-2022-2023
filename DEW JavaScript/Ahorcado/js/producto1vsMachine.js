function elegirPeliMachine(){
    var randomNum= sessionStorage.getItem("numPeli"); // recogemos el numero aleatorio que contenia la posición de la pelicula escogida en el json
    var xmlhttp = new XMLHttpRequest(); //realizamos la conexión 
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var myObj = JSON.parse(this.responseText); //devolvemos cada uno de los atributos del json en el html 
            document.getElementById("titulo").innerHTML = myObj[randomNum].titulo; 
            document.getElementById("director").innerHTML = myObj[randomNum].director;
            document.getElementById("clasificacion").innerHTML = myObj[randomNum].clasificacion;
            document.getElementById("estreno").innerHTML = myObj[randomNum].anio;
            document.getElementById("actores").innerHTML = myObj[randomNum].actores;
            document.getElementById("sinopsis").innerHTML = myObj[randomNum].sinopsis;
            document.getElementById("poster").innerHTML = "<img width='400' height='400' src='" + myObj[randomNum].imagen + "'>";
        }
    };
    xmlhttp.open("GET", "../json/peliculasSeries.json", true);
    xmlhttp.send();
}
elegirPeliMachine();
