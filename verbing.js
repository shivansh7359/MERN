function verbing(string){
    let result = "";
    if(string.length >= 3){
        if(string.slice(-3) != "ing"){
            result = string.concat("ing");
        }
        else{
            result = string.concat("ly");
        }
    }
    else{
        result = string;
    }
    return result;
}


const ans = verbing("ab");
console.log(ans);
