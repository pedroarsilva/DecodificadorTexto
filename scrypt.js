const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

const imagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// FUNÇAO ENCRIPTAR
function btnEncriptar() {
    const textEncriptado = encriptar(textArea.value);
    mensagem.value = textEncriptado;
    textArea.value = " ";
    ocultarImagemAlerta()
}

// FUNÇÃO DESICRIPTAR
function btnDesencriptar() {
    const textDesencriptado = desencriptar(textArea.value);
    mensagem.value = textDesencriptado;
    textArea.value = " ";
    ocultarImagemAlerta()
}

// FUNÇÃO COPIAR
function btnCopiar() {
    const textCopiado = document.getElementById("texto-copiado").value;
    navigator.clipboard.writeText(textCopiado);
    // console.log(textCopiado);
    mensagem.value = " ";
    exibirImagemAlerta();
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();


    for (i = 0; i < matrizCodigo.length; i++) {

        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}


function desencriptar(stringDesencriptada) {
    
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (i = 0; i < matrizCodigo.length; i++) {
        
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

const imagemBoneco = document.querySelector('.img-boneco');
const imagemAlerta = document.querySelector('.img-alerta');

function exibirImagemAlerta() {
    imagemBoneco.style.display = 'block';
    imagemAlerta.style.display = 'block';
}

function ocultarImagemAlerta() {
    imagemBoneco.style.display = 'none';
    imagemAlerta.style.display = 'none';
}


