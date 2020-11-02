import cipher from './cipher.js';

let buttonEncode = document.querySelector('#send-encode');

function encode(event){
    let offset = document.getElementById('offset-encode');
    let message = document.getElementById('message-encode');
    let answerHTML = document.querySelector('#answer-encode');
    try{
        let answer = cipher.encode(parseInt(offset.value),message.value);
        answerHTML.textContent = `Mensagem criptografada:\n${answer}`;
    }catch(error){
        alert(error);
    }

    event.preventDefault()
}

buttonEncode.addEventListener("click",encode);

let buttonDecode = document.querySelector('#send-decode');

function decode(event){
    let offset = document.getElementById('offset-decode');
    let message = document.getElementById('message-decode');
    let answerHTML = document.querySelector('#answer-decode');
    try{
        let answer = cipher.decode(parseInt(offset.value),message.value);
        answerHTML.textContent = "Mensagem descriptografada: " + answer;
    }catch(error){
        alert(error);
    }

    event.preventDefault()
}

buttonDecode.addEventListener("click",decode);