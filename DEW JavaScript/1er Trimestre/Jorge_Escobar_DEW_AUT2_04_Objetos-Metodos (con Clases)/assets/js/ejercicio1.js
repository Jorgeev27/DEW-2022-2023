/*

1. BOLAS (CON CLASES)

Queremos crear un objeto llamado bola que guarde: 

- Coordenadas x e y: las coordenadas horizontal y vertical donde comienza la bola en la pantalla. 
Esto puede oscilar entre 0 (esquina superior izquierda) y el ancho y alto de la ventana del navegador 
(esquina inferior derecha) - 600.

- Velocidad horizontal y vertical (velX y velY): a cada bola se le asigna una velocidad horizontal y vertical; 
en términos reales, estos valores se agregan regularmente a los valores de las coordenadas x / y cuando 
animamos las bolas, para moverlas tanto en cada cuadro.

- Color: cada bola tiene un color.

- Tamaño: cada bola tiene un tamaño: este es su radio, en píxeles.

Esta bola tendrá un método 'dibuja' donde vamos a mostrar las coordenadas de la bola, 
y otro método 'mover', donde la bola va a avanzar y tomará la nueva posición (x e y) de x + velX.

*/

/**
 * Clase Bola con su constructor
 */

class Bola{
    constructor(coorX, coorY, velocidadX, velocidadY, color, tamanio){
        this.coorX = coorX;
        this.coorY = coorY;
        this.velocidadX = velocidadX;
        this.velocidadY = velocidadY;
        this.color = color;
        this.tamanio = tamanio;

        coorX = 0;
        coorY = 0;
        velocidadX = 0;
        velocidadY = 0;
        color = "";
        tamanio = 0;

        switch(coorX){
            case coorX < 0:
                this.coorX = 0;
                break;
            case coorX > 600:
                this.coorX = 600;
                break;
            default:
                this.coorX = coorX;
            
        }

        switch(coorY){
            case coorY < 0:
                this.coorY = 0;
                break;
            case coorY > 600:
                this.coorY = 600;
                break;
            default:
                this.coorY = coorX;
            
        }
    }
    
    /**
    * Método dibuja() en el que mostramos las coordenadas X e Y
    */

    dibuja(){

    }

    /**
    * Método mover() que la bola avanzará a la nueva posición (X e Y), de x + velocidadX
    */

    mover(){

    }
}