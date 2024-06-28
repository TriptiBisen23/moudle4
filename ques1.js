//Sum of the Cubes

function sumcubesdigits(number)
{
    let numstr = number.toString();
    let sum = 0;
    for(let char of numstr)
        {
            const digit = parseInt(char, 10);
            sum+= Math.pow(digit,3);
        }
   
return sum;
}
console.log(sumcubesdigits(123));




