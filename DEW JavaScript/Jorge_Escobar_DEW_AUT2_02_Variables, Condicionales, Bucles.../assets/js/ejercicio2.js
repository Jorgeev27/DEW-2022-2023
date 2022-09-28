/* 

2. Usando un bucle, calcula la suma de los 10 primeros números naturales, 
es decir, la suma de 1 + 2 + 3 ... + 10, e imprimir el resultado por la 
consola. Para ello deberás recorrer el bucle y almacenar el valor 
acumulado en cada iteración en una variable.

*/

let num = 0;
for(i = 1; i < 11; i++){
    num += i;
    console.log(num);
}