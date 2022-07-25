let btnEncriptar = document.querySelector("#encriptar");
let btnDesencriptar = document.querySelector("#desencriptar");
let btnCopiar = document.querySelector('#copiar')
let textoResultado = document.querySelector("#texto-rectangulo");
let mensaje = document.querySelector("#mensaje");
mensaje.focus();

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiarTexto;

function recuperarTexto(){
    let texto = document.querySelector("textarea");
    return texto.value;
}

function encriptar(){
    let textoDado = recuperarTexto();
    let frase = textoDado.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    ocultar();
    textoResultado.textContent = encriptarTexto(frase);

}

function desencriptar(){
    let textoDado = recuperarTexto();
    let frase = textoDado.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    ocultar();
    textoResultado.textContent = desencriptarTexto(frase);
}


function ocultar(){
    document.getElementById("rectangulo").style.display = "none";

}

function encriptarTexto(mensaje){
    let textoMensaje = mensaje;
    let textoVacio = ""
    for(contador = 0; contador < textoMensaje.length; contador ++){
        if(textoMensaje[contador] == "a" || textoMensaje[contador] == "A"){
            textoVacio= textoVacio + "ai";
        }
        else if(textoMensaje[contador] == "e" || textoMensaje[contador] == "E"){
            textoVacio+= "enter"
        }
        
        else if(textoMensaje[contador] == "i" || textoMensaje[contador] == "I"){
            textoVacio+= "imes"
        }

        else if(textoMensaje[contador] == "o" || textoMensaje[contador] == "O"){
            textoVacio+= "ober"
        } 
        else if(textoMensaje[contador] == "u" || textoMensaje[contador] == "U"){
             textoVacio+= "ufat"
        }
        
        else{
            textoVacio= textoVacio + textoMensaje[contador];
        }
    }
    return textoVacio;
}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a" || texto[i] == "A"){
            textoFinal = textoFinal + "a"
            i = i + 1;
        }

        else if(texto[i] == "e" || texto[i] == "E"){
            textoFinal = textoFinal + "e"
            i = i + 4;
        }

        else if(texto[i] == "i" || texto[i] == "I"){
            textoFinal = textoFinal + "i"
            i = i + 3;
        }

        else if(texto[i] == "o" || texto[i] == "O"){
            textoFinal = textoFinal + "o"
            i = i +3
        }

        else if(texto[i] == "u" || texto[i] == "U"){
            textoFinal = textoFinal + "u"
            i = i +3;
        }

        else{
            textoFinal = textoFinal + texto[i];
        }

        
    }
    
    return textoFinal
}

function copiarTexto() {
    /* Get the text field */
    let copyTexto = document.getElementById("texto-rectangulo");
    let textoMinuscula = copyTexto.value;
    /* Select the text field */
    copyTexto.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    if(copyTexto.value != ""){
        alert("Texto copiado: " + textoMinuscula.toLowerCase());
    }else{alert("Usted no a introducido ningún texto");
    
    }
  }