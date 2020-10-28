const cipher = {
    encode(offset, message){
        let encodeLetters;
        let encodeMessage = "";
        
        if(message.length === 0){
            alert("Escreva sua mensagem!")
        };
        
        for(let i=0;i<message.length;i++){
            let encodeASC = message.charCodeAt(i);
        
            if(encodeASC<48){
                encodeLetters=encodeASC;
            }else if(encodeASC>=48 && encodeASC<=57){
                encodeLetters=((encodeASC-48)+offset)%26+48;
            }else if(encodeASC>57 && encodeASC<65){
                encodeLetters=encodeASC;
            }else if(encodeASC>90 && encodeASC<97){
                encodeLetters=encodeASC;
            }else if(encodeASC>122){
                encodeLetters=encodeASC;
            }else if(encodeASC>=65 && encodeASC<=90){
                encodeLetters=((encodeASC-65)+offset)%26+65;
            }else if(encodeASC>=97 && encodeASC<=122){
                encodeLetters=((encodeASC-97)+offset)%26+97;
            }
            
        encodeMessage += String.fromCharCode(encodeLetters);
        }
        return encodeMessage;
    },
    
    decode(offset, message){
        let decodeLetters;
        let decodeMessage = "";
    
        if(message.length === 0){
            alert("Escreva sua mensagem!")
        };
        
    
        for(let i=0;i<message.length;i++){
            let decodeASC = message.charCodeAt(i);
    
            if(decodeASC<65){
                decodeLetters=decodeASC;
            }else if(decodeASC>=48 && decodeASC<=57){
                encodeLetters=((encodeASC-48)+(26-offset))%26+48;
            }else if(decodeASC>90 && decodeASC<97){
                decodeLetters=decodeASC;
            }else if(decodeASC>122){
                decodeLetters=decodeASC;
            }else if(decodeASC>=65 && decodeASC<=90){
                decodeLetters=((decodeASC-65)+(26-offset))%26+65;
            }else if(decodeASC>=97 && decodeASC<=122){
                decodeLetters=((decodeASC-97)+(26-offset))%26+97;
            }
    
            decodeMessage += String.fromCharCode(decodeLetters)
        }
        return decodeMessage
        }
};

export default cipher;