/* 

15. Programa que tenga una función que le pasemos un vector de N elementos 
y rota sus componentes un lugar hacia su derecha. Teniendo en 
cuenta que el último componente debe desplazarse al primer lugar.

*/

let elementos = parseInt(prompt("¿Cuantos elementos quieres en el vector?"));
let listaElementos = Array(elementos);
vector(listaElementos);
document.write(listaElementos);

function vector(matrizElementos){
    let largo, valor;
    largo = matrizElementos.length;
    for (let i = 0; i < largo; i++){
        valor = Math.random()*10;
        matrizElementos[i] = Math.round(valor);
    }
    listaElementos.pop();
    listaElementos.unshift();
    console.log(listaElementos);
}