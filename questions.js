function palindrome(string){
    var len = string.length;
    for(let i=0; i<len/2; i++){
        if(string[i] !== string[len - 1 - i]){
            return("Not a palindrome");
        }
    }
    return("Palindrome");
}

function leapYear(year){
    if((year%4 == 0) && (year%100 != 0) || (year%400 == 0)){
        return(year + " is a leap year.");
    }
    else{
        return(year + " is not a leap year");
    }

}

const value = palindrome("abbbbbba");
console.log(value);

const ans = leapYear(2001);
console.log(ans);


