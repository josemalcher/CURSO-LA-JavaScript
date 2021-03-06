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
 *  - Caracteristicas do Nós
 *      - nodeName
 *      - nodeType
 *      - nodeValue
 *
 */

window.onload = function () {

     var ul = document.getElementsByTagName("ul").item(0);
    //alert(ul.childNodes.item(1));

    var p = document.getElementsByTagName("p").item(0);
    //alert(p.lastChild);
    p.lastChild.setAttribute("style","color:red;") ;

    var filho = p.firstChild;
    //alert(filho.nextSibling);

    var strong = document.getElementsByTagName("strong").item(0);
    //alert(strong.nodeName);

    var liPrimaria   = ul.childNodes.item(1);
    var ulSecundaria = liPrimaria.childNodes.item(1);
    var liSecundaria = ulSecundaria.childNodes.item(1);
    var ulFinal  = liSecundaria.childNodes.item(1);
    var liFinal = ulFinal.childNodes.item(1);
    var texto = liFinal.firstChild.nodeValue;
    alert(texto);

}