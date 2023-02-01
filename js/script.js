
 const pattern = new RegExp('^[A-Z]+$', 'i');
 let isValid = false;
 
 function validar() {
    //let isValid = false;
    const input = document.getElementById("inputTexto");
    const message = document.getElementById("message");
    const pattern = new RegExp('^[a-z]+$', 'i');
    input.willValidate = false;

    if(!input.value) {
        isValid = false;
    } else if (!pattern.test(input.value)){
        isValid = false;
    } else {
        isValid = true;

    }

    if (!isValid) {
        message.style.color = 'red';
    } else {
        message.style.color = 'green';
   
    }
    return isValid;
}

 function encriptar() {

    if (isValid == true) {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
     
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");
    
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    }

}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
    
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}


function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Se copio!");
}