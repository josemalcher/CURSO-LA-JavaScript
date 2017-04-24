/**
 * Created by josemalcher on 24/04/2017.
 */

var x = prompt("Digite um numero de 0 a 10");

x = parseInt(x);

var  t = new String();

switch (x){
    case 0: t = 'a'; break;
    case 1: t = 'b'; break;
    case 2: t = 'c'; break;
    case 3: t = 'd'; break;
    case 4: t = 'e'; break;
    case 5: t = 'f'; break;
    case 6: t = 'g'; break;
    case 7: t = 'h'; break;
    case 8: t = 'i'; break;
    case 9: t = 'j'; break;
    case 10: t = 'k'; break;
    default: t= 'Somente até 0-10';
}
alert(t);
