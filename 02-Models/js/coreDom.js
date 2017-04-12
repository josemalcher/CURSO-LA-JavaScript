/**
 * Created by josemalcher on 12/04/2017.
 */
//Aula Mod 2 Aula 8 - Core DOM

/**
 *  DOM CORE API
 *  - Tipo de Nós
 *      - Documento
 *      - Elemento
 *      - Atributo
 *      - Texto
 *  - Parentesco:
 *      - Pai    -> parentNodes
 *      - Filhos -> childNodes
 *      - Irmãos -> sibling  -> nextSibling & previusSibling
 *
 */

window.onload = function () {

 /*   var ul = document.getElementsByTagName("ul").item(0);
    alert(ul.childNodes.item(1));*/

    var p = document.getElementsByTagName("p").item(0);
    //alert(p.lastChild);
    p.lastChild.setAttribute("style","color:red;") ;

    var filho = p.firstChild;
    alert(filho.nextSibling);

}