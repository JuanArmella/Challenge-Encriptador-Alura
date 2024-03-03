let copiar = document.getElementById('boton-copiar')
copiar.style.display = 'none'

function botonEncriptar() {
    let texto = document.getElementById('texto').value
    let tituloMensaje = document.getElementById('titulo-mensaje')
    let parrafoMensaje = document.getElementById('parrafo')
    let doll = document.getElementById('doll')
    
    let textoCrifrado = texto
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat')


    if (texto.length != 0) {

        parrafoMensaje.textContent = textoCrifrado
        tituloMensaje.style.display = 'none'
        doll.style.display = 'none'
        copiar.style.display = 'block' 
    }else{
        alert('deber escribir algo primero')
    }

}

function botonDesencriptar() {
    let texto = document.getElementById('texto').value
    let tituloMensaje = document.getElementById('titulo-mensaje')
    let parrafoMensaje = document.getElementById('parrafo')
    let doll = document.getElementById('doll')
    
    let textoCrifrado = texto
        .replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u')


    if (texto.length != 0) {
        
        parrafoMensaje.textContent = textoCrifrado
        tituloMensaje.style.display = 'none'
        doll.style.display = 'none'
    }
    
}

function botonCopiar() {
    let textoCopiado = document.getElementById('parrafo')
    let button = document.getElementById('boton-copiar')

    navigator.clipboard.writeText(parrafo.textContent)
    button.textContent = '¡Copiado!'
}