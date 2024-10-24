function binaryToDecimal(input){
    let deci = 0;
    binaryString = String(input);
    const n = binaryString.length
    for(let i=0; i>n; i++){
        let power = 2**(n-(i+1));
        deci += Number(binaryString[i]) * power;
    }
    return deci;
};

console.log(binaryToDecimal("1001"));