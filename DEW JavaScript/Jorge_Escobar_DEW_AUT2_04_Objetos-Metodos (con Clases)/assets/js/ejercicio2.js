/*

2. PIEDRAS, PAPEL, TIJERA (CON CLASES)

Vamos a crear un juego básico de Piedra, Papel y Tijera, donde se 
realizaran 'tiradas' entre dos jugadores y gana la partida el que gane 3 tiradas:

Primero vamos ha hacer que el juego sea random, es decir que la tirada de cada jugador 
sea aleatoria (por la maquina) para comprobar que todo es correcto y se escriben los resultados correctos.

Crearemos un objeto juego, que tenga como características las opciones 
(en este caso: Piedra, papel y tijera), los nombre de los jugadores, y los puntos que tiene cada jugador.

Y tendremos las siguientes funciones:

- preguntarNombre() - Preguntaremos el nombre del jugador/A

- numeroRandom() - Escogeremos una opción ( p, p, t) random

- tiradaJugador() - mostraremos el valor de una tirada de un jugador

- imprimirResultados(jugador1, jugador2) – Devuelve que jugador ha ganado

- evaluaTirada(tiradajugador1, tiradajugador2) – Devuelve cual de los dos jugadores ha ganado 
la tirada (piedra gana tijera, tijeras gana papel y papel gana piedra) y le da un punto al jugador ganador.

- juego() - Primero pedimos los nombres de los jugadores, y jugamos al mejor de 3.

*/