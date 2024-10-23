/* function factorial(n){
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

console.log(factorial(3)); */

function parkingSpace(spaces, yesterday, today){
    let count = 0;
    if(isNaN(spaces) || !Number.isInteger(spaces) || spaces < 1 || spaces > 100){
        return 'Number of spots not valid'
    }else{
        for (let i=0; i < spaces; i++) {
            if (yesterday[i] === 'C' && today[i] === 'C') {
                count++
            };
            return count;
        };
    };
}; 

console.log(parkingSpace(5, 'C..C.', 'CC..C'));