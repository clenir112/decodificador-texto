var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");


function criptografar() {

    var texto = textInput.value;

    var resulCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g,"ai").replace(/o/g, "ober" ).replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea reandoly id="input-texto">' + resulCripto +
     '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>' 
}

function descriptografar(){

    var texto = textInput.value;
    var resulDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea reandoly id="input-texto">' + resulDescripto +
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>' 
}

function copiar(){
    var textcop = document.getElementById('input-texto');
    textcop.select();
    document.execCommand('copy');
    alert("Texto Copiado");

}























 