const fibonacci = function(number) 
{
    const numInt = parseInt(number);
    if(numInt == 0) return 0;
    if(numInt < 0) return "OOPS";
    let number1 = 1;
    let number2 = 1;
    
    let res = number1;
    
    for(let i = 2; i < numInt; i++)
    {
        res = number1 + number2;
        number1 = number2;
        number2 = res;
    }
    return res;
    
};

// Do not edit below this line
module.exports = fibonacci;
