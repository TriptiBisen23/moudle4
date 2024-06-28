//Check PERFECT NUMBER OR NOT.


const input = require("readline-sync")
var n = input.questionInt("Enter the number:");
let i = 1;
let s = 0;
  while(n>i)
{
  if(n%i==0)
{
   s = s+i;
   i = i+1;
} else
{
   i = i+1;
}
}
   if(s==n)
{
   console.log("perfect");
}  else
{
   console.log("notperfect");
}



