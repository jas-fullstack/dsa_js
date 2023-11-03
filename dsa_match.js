var reverse = function(n) {
    
    while(n>0){
       let lastDigit = parseInt(n%10);
       n =  parseInt(n/10)     
    }
    return n
};
console.log(reverse(123))