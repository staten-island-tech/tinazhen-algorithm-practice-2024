function binaryToDecimal(input){
    let deci = 0;
    for(let i=0; i<input.length; i++){
        if (input[input.length-i-1]==="1"){
            deci = deci + Math.pow(2,i);
        }
    }
    return deci;
};

console.log(binaryToDecimal("100101"));

function deciToBinary(input){
    let binary = "";
    while(input>=1){
        let r = input % 2
        input = Math.floor(input / 2)
        if ((r === 1)){
            binary = binary + r;
        }else{
            binary = binary + "0";
        }
    };
    return binary;
};

console.log(deciToBinary(9));