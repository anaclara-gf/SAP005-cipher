const cipher = {
    encode(offset, message){
        let encodeLetters;
        let encodeMessage = "";

        if(typeof message !== 'string'|| typeof offset !== 'number') throw new TypeError("Você deve escrever um número/mensagem!");
        
        for(let i=0;i<message.length;i++){
            let encodeASC = message.charCodeAt(i);
        
            if(encodeASC>=65 && encodeASC<=90){
                if(offset>0){
                    encodeLetters=((encodeASC-65)+offset)%26+65;
                }else{
                    encodeLetters=((encodeASC-65)+(26+offset%26))%26+65;
                }
            }else if(encodeASC>=97 && encodeASC<=122){
                if(offset>0){
                    encodeLetters=((encodeASC-97)+offset)%26+97;
                }else{
                    encodeLetters=((encodeASC-97)+(26+offset%26))%26+97;
                }
            }else{
                encodeLetters=encodeASC;
            }
            
        encodeMessage += String.fromCharCode(encodeLetters);
        }

        return encodeMessage;
    },
    
    decode(offset, message){
        let decodeLetters;
        let decodeMessage = "";
        let offsetMod = offset%26
        
        if(typeof message !== 'string'|| typeof offset !== 'number') throw new TypeError("Você deve escrever um número/mensagem!");

        for(let i=0;i<message.length;i++){
            let decodeASC = message.charCodeAt(i);
    
            if(decodeASC>=65 && decodeASC<=90){
                if(offsetMod>0){
                    decodeLetters=((decodeASC+65)-offsetMod)%26+65;
                }else{
                    decodeLetters=((decodeASC+65)-(26+offsetMod%26))%26+65;
                }
            }else if(decodeASC>=97 && decodeASC<=122){
                if(offsetMod>0){
                    decodeLetters=((decodeASC+97)-offsetMod-12)%26+97;
                }else{
                    decodeLetters=((decodeASC+97)-(26+offsetMod%26)-12)%26+97;
                }
            }else{
                decodeLetters=decodeASC;
            }
    
            decodeMessage += String.fromCharCode(decodeLetters)
        }
        return decodeMessage
    }
}

export default cipher;