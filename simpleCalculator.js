function calculator(a, b, sign){
    function calculator(a,b,sign){
        if(sign === '+'){
          return a + b
        }else if(sign === '-'){
          return a - b
        }else if(sign === '*'){
          return a * b
        }else if(sign === '/'){
          return a / b
        }else{
          return "unknown value"
        }
        
        }
}

//eval(a, sign, b) also works for reasons I don't understand