// if-else



const input = require("readline-sync");
let a = input.questionInt("enter a number: ");
let b = input.questionInt("enter b number: ");
let c = input.questionInt("enter c number: ");
if (a==b && b==c) 
{
    pro = a*b*c;
    console.log("output : ",pro);
 } else if (a==b && a!=c) 
{
     
        add= a+b+c;
        sum= add % c;
        console.log("output : ",sum);
    }  
    else if (a!=c && b==c) 
    {
        add= a+b+c;
        sum=add % a
        console.log("output : ",sum);
    }
    else if (a==c && b!=c) 
    {
        add= a+b+c;
        sum=add % b
        console.log("output : ",sum);
    }
       else if (a>b && a>c) {
            console.log("output : ",a**2);
        } else if (b>a && b>c) 
        {
            console.log("output : ",b**2); 
        } else {
            console.log("output : ",c**2);
        }