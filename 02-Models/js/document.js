/**
 * Created by josemalcher on 12/04/2017.
 */

//https://www.w3schools.com/js/js_htmldom_document.asp
window.onload  = function () {

    //criando um elemento
    var div     =       document.createElement("div");

    //Personalizando no css - adicionando atributo
    div.setAttribute("class", "node");

    //criando o texto
    var text    =       document.createTextNode("Exercicio de utilização do node api");

    //preenchendo o elemento criando om um texto
    div.appendChild(text);

    //selecionando um container
    var container   = document.getElementById("container");

    //inserindo o elemento no container
    container.appendChild(div);


}