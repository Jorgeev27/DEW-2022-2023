/* 

13. Haz un programa que dado un número del 1 al 99, 
lo muestre escrito en letras. Por ejemplo, 
dado el 35 debería mostrarse treinta y cinco.

*/

let numero = 0;
let uno = "UNO";
let dos = "DOS";
let tres = "TRES";
let cuatro = "CUATRO";
let cinco = "CINCO";
let seis = "SEIS";
let siete = "SIETE";
let ocho = "OCHO";
let nueve = "NUEVE";
numeroALetras(numero);

function numeroALetras(numero){
    do{
        if(numero < 1 || numero > 99){
            numero = prompt("Dime un numero del 1 al 99");
        }
    }while(numero < 1 || numero > 99);


    if(numero < 10){
        switch(numero){
            case '1':
                if(numero == 1){
                    document.write(numero + ": " + uno);
                }
                break;
            case '2':
                if(numero == 2){
                    document.write(numero + ": " + dos);
                }
                break;
            case '3':
                if(numero == 3){
                    document.write(numero + ": " + tres);
                }
                break;
            case '4':
                if(numero == 4){
                    document.write(numero + ": " + cuatro);
                }
                break;
            case '5':
                if(numero == 5){
                }
                    document.write(numero + ": " + cinco);
                break;
            case '6':
                if(numero == 6){
                    document.write(numero + ": " + seis);
                }
                break;
            case '7':
                if(numero == 7){
                    document.write(numero + ": " + siete);
                }
                break;
            case '8':
                if(numero == 8){
                    document.write(numero + ": " + ocho);
                }
                break;
            case '9':
                if(numero == 9){
                    document.write(numero + ": " + nueve);
                }
                break;
        }
    }

    if(numero < 20){
        switch(numero){
            case '10':
                if(numero == 10){
                    document.write(numero + ": " + "DIEZ");
                }
                break;
            case '11':
                if(numero == 11){
                    document.write(numero + ": " + "ONCE");
                }
                break;
            case '12':
                if(numero == 12){
                    document.write(numero + ": " + "DOCE");
                }
                break;
            case '13':
                if(numero == 13){
                    document.write(numero + ": " + "TRECE");
                }
                break;
            case '14':
                if(numero == 14){
                    document.write(numero + ": " + "CATORCE");
                }
                break;
            case '15':
                if(numero == 15){
                    document.write(numero + ": " + "QUINCE");
                }
                break;
            case '16':
                if(numero == 16){
                    document.write(numero + ": " + "DIECI" + seis);
                }
                break;
            case '17':
                if(numero == 17){
                    document.write(numero + ": " + "DIECI" + siete);
                }
                break;
            case '18':
                if(numero == 18){
                    document.write(numero + ": " + "DIECI" + ocho);
                }
                break;
            case '19':
                if(numero == 19){
                    document.write(numero + ": " + "DIECI" + nueve);
                }
                break;
        }
    }
    if(numero < 30){
        switch(numero){
            case '20':
                if(numero == 20){
                    document.write(numero + ": " + "VEINTE");
                }
                break;
            case '21':
                if(numero == 21){
                    document.write(numero + ": " + "VEINTI" + uno);
                }
                break;
            case '22':
                if(numero == 22){
                    document.write(numero + ": " + "VEINTI" + dos);
                }
                break;
            case '23':
                if(numero == 23){
                    document.write(numero + ": " + "VEINTI" + tres);
                }
                break;
            case '24':
                if(numero == 24){
                    document.write(numero + ": " + "VEINTI" + cuatro);
                }
                break;
            case '25':
                if(numero == 25){
                    document.write(numero + ": " + "VEINTI" + cinco);
                }
                break;
            case '26':
                if(numero == 26){
                    document.write(numero + ": " + "VEINTI" + seis);
                }
                break;
            case '27':
                if(numero == 27){
                    document.write(numero + ": " + "VEINTI" + siete);
                }
                break;
            case '28':
                if(numero == 28){
                    document.write(numero + ": " + "VEINTI" + ocho);
                }
                break;
            case '29':
                if(numero == 29){
                    document.write(numero + ": " + "VEINTI" + nueve);
                }
                break;
        }
    }

    if(numero < 40){
        switch(numero){
            case '30':
                if(numero == 30){
                    document.write(numero + ": " + "TREINTA");
                }
                break;
            case '31':
                if(numero == 31){
                    document.write(numero + ": " + "TREINTA Y " + uno);
                }
                break;
            case '32':
                if(numero == 32){
                    document.write(numero + ": " + "TREINTA Y " + dos);
                }
                break;
            case '33':
                if(numero == 33){
                    document.write(numero + ": " + "TREINTA Y " + tres);
                }
                break;
            case '34':
                if(numero == 34){
                    document.write(numero + ": " + "TREINTA Y " + cuatro);
                }
                break;
            case '35':
                if(numero == 35){
                    document.write(numero + ": " + "TREINTA Y " + cinco);
                }
                break;
            case '36':
                if(numero == 36){
                    document.write(numero + ": " + "TREINTA Y " + seis);
                }
                break;
            case '37':
                if(numero == 37){
                    document.write(numero + ": " + "TREINTA Y " + siete);
                }
                break;
            case '38':
                if(numero == 38){
                    document.write(numero + ": " + "TREINTA Y " + ocho);
                }
                break;
            case '39':
                if(numero == 39){
                    document.write(numero + ": " + "TREINTA Y " + nueve);
                }
                break;
        }
    }

    if(numero < 50){
        switch(numero){
            case '40':
                if(numero == 40){
                    document.write(numero + ": " + "CUARENTA");
                }
                break;
            case '41':
                if(numero == 41){
                    document.write(numero + ": " + "CUARENTA Y " + uno);
                }
                break;
            case '42':
                if(numero == 42){
                    document.write(numero + ": " + "CUARENTA Y " + dos);
                }
                break;
            case '43':
                if(numero == 43){
                    document.write(numero + ": " + "CUARENTA Y " + tres);
                }
                break;
            case '44':
                if(numero == 44){
                    document.write(numero + ": " + "CUARENTA Y " + cuatro);
                }
                break;
            case '45':
                if(numero == 45){
                    document.write(numero + ": " + "CUARENTA Y " + cinco);
                }
                break;
            case '46':
                if(numero == 46){
                    document.write(numero + ": " + "CUARENTA Y " + seis);
                }
                break;
            case '47':
                if(numero == 47){
                    document.write(numero + ": " + "CUARENTA Y " + siete);
                }
                break;
            case '48':
                if(numero == 48){
                    document.write(numero + ": " + "CUARENTA Y " + ocho);
                }
                break;
            case '49':
                if(numero == 49){
                    document.write(numero + ": " + "CUARENTA Y " + nueve);
                }
                break;
        }
    }

    if(numero < 60){
        switch(numero){
            case '50':
                if(numero == 50){
                    document.write(numero + ": " + "CINCUENTA");
                }
                break;
            case '51':
                if(numero == 51){
                    document.write(numero + ": " + "CINCUENTA Y " + uno);
                }
                break;
            case '52':
                if(numero == 52){
                    document.write(numero + ": " + "CINCUENTA Y " + dos);
                }
                break;
            case '53':
                if(numero == 53){
                    document.write(numero + ": " + "CINCUENTA Y " + tres);
                }
                break;
            case '54':
                if(numero == 54){
                    document.write(numero + ": " + "CINCUENTA Y " + cuatro);
                }
                break;
            case '55':
                if(numero == 55){
                    document.write(numero + ": " + "CINCUENTA Y " + cinco);
                }
                break;
            case '56':
                if(numero == 56){
                    document.write(numero + ": " + "CINCUENTA Y " + seis);
                }
                break;
            case '57':
                if(numero == 57){
                    document.write(numero + ": " + "CINCUENTA Y " + siete);
                }
                break;
            case '58':
                if(numero == 58){
                    document.write(numero + ": " + "CINCUENTA Y " + ocho);
                }
                break;
            case '59':
                if(numero == 59){
                    document.write(numero + ": " + "CINCUENTA Y " + nueve);
                }
                break;
        }
    }

    if(numero < 70){
        switch(numero){
            case '60':
                if(numero == 60){
                    document.write(numero + ": " + "SESENTA");
                }
                break;
            case '61':
                if(numero == 61){
                    document.write(numero + ": " + "SESENTA Y " + uno);
                }
                break;
            case '62':
                if(numero == 62){
                    document.write(numero + ": " + "SESENTA Y " + dos);
                }
                break;
            case '63':
                if(numero == 63){
                    document.write(numero + ": " + "SESENTA Y " + tres);
                }
                break;
            case '64':
                if(numero == 64){
                    document.write(numero + ": " + "SESENTA Y " + cuatro);
                }
                break;
            case '65':
                if(numero == 65){
                    document.write(numero + ": " + "SESENTA Y " + cinco);
                }
                break;
            case '66':
                if(numero == 66){
                    document.write(numero + ": " + "SESENTA Y " + seis);
                }
                break;
            case '67':
                if(numero == 67){
                    document.write(numero + ": " + "SESENTA Y " + siete);
                }
                break;
            case '68':
                if(numero == 68){
                    document.write(numero + ": " + "SESENTA Y " + ocho);
                }
                break;
            case '69':
                if(numero == 69){
                    document.write(numero + ": " + "SESENTA Y " + nueve);
                }
                break;
        }
    }

    if(numero < 80){
        switch(numero){
            case '70':
                if(numero == 70){
                    document.write(numero + ": " + "SETENTA");
                }
                break;
            case '71':
                if(numero == 71){
                    document.write(numero + ": " + "SETENTA Y " + uno);
                }
                break;
            case '72':
                if(numero == 72){
                    document.write(numero + ": " + "SETENTA Y " + dos);
                }
                break;
            case '73':
                if(numero == 73){
                    document.write(numero + ": " + "SETENTA Y " + tres);
                }
                break;
            case '74':
                if(numero == 74){
                    document.write(numero + ": " + "SETENTA Y " + cuatro);
                }
                break;
            case '75':
                if(numero == 75){
                    document.write(numero + ": " + "SETENTA Y " + cinco);
                }
                break;
            case '76':
                if(numero == 76){
                    document.write(numero + ": " + "SETENTA Y " + seis);
                }
                break;
            case '77':
                if(numero == 77){
                    document.write(numero + ": " + "SETENTA Y " + siete);
                }
                break;
            case '78':
                if(numero == 78){
                    document.write(numero + ": " + "SETENTA Y " + ocho);
                }
                break;
            case '79':
                if(numero == 79){
                    document.write(numero + ": " + "SETENTA Y " + nueve);
                }
                break;
        }
    }

    if(numero < 90){
        switch(numero){
            case '80':
                if(numero == 80){
                    document.write(numero + ": " + "OCHENTA");
                }
                break;
            case '81':
                if(numero == 81){
                    document.write(numero + ": " + "OCHENTA Y " + uno);
                }
                break;
            case '82':
                if(numero == 82){
                    document.write(numero + ": " + "OCHENTA Y " + dos);
                }
                break;
            case '83':
                if(numero == 83){
                    document.write(numero + ": " + "OCHENTA Y " + tres);
                }
                break;
            case '84':
                if(numero == 84){
                    document.write(numero + ": " + "OCHENTA Y " + cuatro);
                }
                break;
            case '85':
                if(numero == 85){
                    document.write(numero + ": " + "OCHENTA Y " + cinco);
                }
                break;
            case '86':
                if(numero == 86){
                    document.write(numero + ": " + "OCHENTA Y " + seis);
                }
                break;
            case '87':
                if(numero == 87){
                    document.write(numero + ": " + "OCHENTA Y " + siete);
                }
                break;
            case '88':
                if(numero == 88){
                    document.write(numero + ": " + "OCHENTA Y " + ocho);
                }
                break;
            case '89':
                if(numero == 89){
                    document.write(numero + ": " + "OCHENTA Y " + nueve);
                }
                break;
        }
    }

    if(numero < 100){
        switch(numero){
            case '90':
                if(numero == 90){
                    document.write(numero + ": " + "NOVENTA");
                }
                break;
            case '91':
                if(numero == 91){
                    document.write(numero + ": " + "NOVENTA Y " + uno);
                }
                break;
            case '92':
                if(numero == 92){
                    document.write(numero + ": " + "NOVENTA Y " + dos);
                }
                break;
            case '93':
                if(numero == 93){
                    document.write(numero + ": " + "NOVENTA Y " + tres);
                }
                break;
            case '94':
                if(numero == 94){
                    document.write(numero + ": " + "NOVENTA Y " + cuatro);
                }
                break;
            case '95':
                if(numero == 95){
                    document.write(numero + ": " + "NOVENTA Y " + cinco);
                }
                break;
            case '96':
                if(numero == 96){
                    document.write(numero + ": " + "NOVENTA Y " + seis);
                }
                break;
            case '97':
                if(numero == 97){
                    document.write(numero + ": " + "NOVENTA Y " + siete);
                }
                break;
            case '98':
                if(numero == 98){
                    document.write(numero + ": " + "NOVENTA Y " + ocho);
                }
                break;
            case '99':
                if(numero == 99){
                    document.write(numero + ": " + "NOVENTA Y " + nueve);
                }
                break;
        }
    }
}