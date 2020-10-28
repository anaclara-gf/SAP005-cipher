import cipher from './cipher.js';

let buttonEncode = document.querySelector('#enviar-encode');

function encode(event){
    let offset = document.getElementById('offset-encode');
    let message = document.getElementById('mensagem-encode');
    let respostaHTML = document.querySelector('#resposta-encode');
    let resposta = cipher.encode(parseInt(offset.value),message.value);
    respostaHTML.textContent = resposta;

    event.preventDefault()
}

buttonEncode.addEventListener("click",encode);

let buttonDecode = document.querySelector('#enviar-decode');

function decode(event){
    let offset = document.getElementById('offset-decode');
    let message = document.getElementById('mensagem-decode');
    let respostaHTML = document.querySelector('#resposta-decode');
    let resposta = cipher.decode(parseInt(offset.value),message.value);
    respostaHTML.textContent = resposta;

    event.preventDefault()
}

buttonDecode.addEventListener("click",decode);