// Only One Digit 

function digitalRoot(number)
{
   function sumofdigit(num)
   {
       let sum = 0;
       while(num>0)
        {
            sum+= num% 10;
            num = Math.floor(num/10);
        }
        return sum;
   }  


while(number>=10)
    {
        number = sumofdigit(number);
    }
    return number;
}
console.log(digitalRoot(38));