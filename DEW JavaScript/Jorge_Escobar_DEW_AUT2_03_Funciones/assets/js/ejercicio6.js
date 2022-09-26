/* 

6. Genera una lista que contenga el cuadrado de los 
números pares y el cubo de los impares entre 
1 y 100 (inclusive).

*/

let num = 1;
function cuadradoCubo(num){
    for(i = 1; i < 101; i++){
        if(num % 2 == 0){
            let cuadrado = Math.pow(num, 2);
            console.log(num + "**" + 2 + "=" + cuadrado);
        }else{
            let cubo = Math.pow(num,3);
            console.log(num + "**" + 3 + "=" + cubo);
        }
        num ++;
    }
}
cuadradoCubo(num);
