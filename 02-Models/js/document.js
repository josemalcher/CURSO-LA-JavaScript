/**
 * Created by josemalcher on 12/04/2017.
 */

//https://www.w3schools.com/js/js_htmldom_document.asp
window.onload  = function () {

    //criando um elemento
    var div     =       document.createElement("div");

    //Personalizando no css - adicionando atributo
    //div.setAttribute("class", "node");

    // Criando um atributo
    var attr  =  document.createAttribute("class");
    //atribuindo um valor para o atributo
    attr.value  =  "attr";
    //Inserindo o atributo no elemento
    div.setAttributeNode(attr);

    // REMOVENDO o atributo
    //div.removeAttribute("class");

    //criando o texto
    var text    =       document.createTextNode("Exercicio de utilização do node api");

    //preenchendo o elemento criando om um texto
    div.appendChild(text);

    //selecionando um container
    var container   = document.getElementById("container");

    //inserindo o elemento no container
    container.appendChild(div);

    //selecionando o elemento
    var ul = document.getElementById("teste");

    // Selecionanndo o nó de texto vazio
    var texto = ul.firstChild;
    //excluindo o nó de texto vazio
    ul.removeChild(texto);


    //Listandoo o primeiro elemento e Clonando o nó
    var li = ul.childNodes.item(1).cloneNode(true);
    //Atribuindo o nó
    ul.appendChild(li);
    //alert(li);
    alert(ul.firstChild);


}