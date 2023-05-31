function encriptar_texto(){
    let texto = document.getElementById("texto").value;
    // let mensaje = document.getElementById("mensaje");
    let parrafo = document.getElementById("parrafo");
    let icono = document.getElementById("icono");

    let textoCifrado = texto
                         .replace(/e/gi,"enter")
                         .replace(/i/gi,"imes")
                         .replace(/a/gi, "ai")
                         .replace(/o/gi,"ober")
                         .replace(/u/gi,"ufat");
                         
    
if(document.getElementById("texto").value.length !=0){
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("mensaje").textContent="El texto fue encriptado con éxito";
    parrafo.textContent="";
} else{
    mensaje.textContent="Ningún mensaje fue encontrado";
    icono.src="./img/icono.png";
    parrafo.textContent="Ingresa el texto que quieres encriptar o desencriptar";
}        
                         
}

function desencriptar_texto(){
    let texto = document.getElementById("texto").value;
    // let mensaje = document.getElementById("mensaje");
    let parrafo = document.getElementById("parrafo");
    let icono = document.getElementById("icono");

    let textoCifrado = texto
                         .replace(/enter/gi,"e")
                         .replace(/imes/gi,"i")
                         .replace(/ai/gi, "a")
                         .replace(/ober/gi,"o")
                         .replace(/ufat/gi,"u");

    if(document.getElementById("texto").value.length !=0){
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("mensaje").textContent="El texto fue encriptado con éxito";
    parrafo.textContent="";
    icono.src="./img/listo.jpg";
} 
}