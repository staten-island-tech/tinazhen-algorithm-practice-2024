function factorial(n){
    let r = 1;
    if (isNaN(n)){
        return 'Your input was not a number. Please try again!'
    } else if (n < 0){
        return 'Undefined'
    } else if (n === 0){
        return 1
    }else{
        for(let i = 1; i <= n; i++){
            r *= i;
        }
        return r;
    };
};

console.log(factorial(3));