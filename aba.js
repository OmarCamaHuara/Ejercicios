/**
 * n = 10
 * s = aba
 * abaabaabaa cantidades de a en cadena
 * salida = 7
 */
 let n = 10;
 let s = "abba";
 let conA = 0;
 let conString = 0;
    while(conString < n){
        for(let i = 0; i < s.length; i++){
                if(s.charAt(i) === "a" && conString < n){
                    conA++;
                }  
            conString++; 
         }
    }
console.log(conA)