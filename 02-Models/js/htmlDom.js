/**
 * Created by josemalcher on 11/04/2017.
 */

/*
 HTML DOM API
 - ID
 - Class
 - Name
 - Tag
 - Selector


 */

window.onload = function() {


    var x = document.getElementById('titulo');
    var y = document.getElementsByClassName("titulo");
    var z = document.getElementsByName("nome");
    //var h = document.getElementsByTagName();

    //alert(y);
    var input = y[2];
    input.value = "TESTE de acesso e atualização do html dom";
    input.size="100";
    input.disabled = "disabled";

    for(i = 0 ; i < z.length ; i++){
        alert(z[i]);
    }

    var s = document.querySelectorAll(".titulo")
    alert(s[0])
}

