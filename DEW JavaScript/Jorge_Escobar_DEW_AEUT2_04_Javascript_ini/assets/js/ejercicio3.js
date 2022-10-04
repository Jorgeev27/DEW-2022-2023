/* 

3. Realiza un programa que pida números por teclado 
hasta que nos introduzcan un número menor que 1 o mayor que 50, 
momento en el que se invertirán los elementos dentro del array. 
Mostrar el array invertido. Se valorará el uso de 1 solo array para todo el programa.
   
*/
let numeros;
let arrayNumeros =[];
function arrayInvertido(numeros){
    do{
        numeros = parseInt(prompt("Dime un numero del 1 al 50"));
        if(isNaN(numeros)){
            alert("ERROR");
            continue;
        }else{
            arrayNumeros.push(numeros);
        }
    }while(numeros < 0 && numeros > 51);

    console.log(numeros);


}

arrayInvertido(numeros);