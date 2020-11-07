import cipher from './cipher.js';

function encode(event){
    let password = document.getElementById('offset-encode').value;
    let offset;
    if(Number.isNaN(parseInt(password))){
        offset = password.length;
    }else {
        offset = parseInt(password);
    }
    let message = document.getElementById('message-encode').value;
    let answerHTML = document.querySelector('#answer-encode');
    try{
        let answer = cipher.encode(offset,message);
        answerHTML.textContent = answer;
    }catch(error){
        alert(error);
    }

    event.preventDefault()
}

function decode(event){
    let password = document.getElementById('offset-decode').value;
    //para a senha funcionar com números e palavras:
    let offset;
    if(Number.isNaN(parseInt(password))){
        offset = password.length;
    }else {
        offset = parseInt(password);
    }

    let message = document.getElementById('message-decode').value;
    let answerHTML = document.querySelector('#answer-decode');
    //typeError
    try{
        let answer = cipher.decode(offset,message);
        answerHTML.textContent = answer;
    }catch(error){
        alert(error);
    }

    //para funcionar o form no html:
    event.preventDefault()
}


let buttonEncode = document.querySelector('#send-encode');

//para funcionar em todas as páginas (só vai acionar o button caso ele exista na página):
if(buttonEncode !== null){
    buttonEncode.addEventListener("click",encode);
}
    
let buttonDecode = document.querySelector('#send-decode');
if(buttonDecode !== null){
    buttonDecode.addEventListener("click",decode);
}

