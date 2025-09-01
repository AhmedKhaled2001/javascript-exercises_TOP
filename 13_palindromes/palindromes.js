const palindromes = function (str) 
{
    let l = 0;
    let r = str.length - 1;
    
    while(l < r)
    {
        const leftCode = str.charCodeAt(l);
        const rightCode = str.charCodeAt(r);


        if (!((leftCode <= 90 && leftCode >= 65) || (leftCode <= 122 && leftCode >= 97)|| (leftCode <= 57 && leftCode >= 48))) 
        {
            l++;
            continue;
        }
        if (!((rightCode <= 90 && rightCode >= 65) || (rightCode <= 122 && rightCode >= 97) || (rightCode <= 57 && rightCode >= 48)))
        {
            r--;
            continue;
        } 

        if(str.charAt(l).toLowerCase() != str.charAt(r).toLowerCase()) return false;
        else {
            l++;
            r --;
        }
        

    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
