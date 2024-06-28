// array
  
const input = require("readline-sync");
let A = [];
let M = input.questionInt("enter the no. of element for A : ");
for (let i=0; i<M; i++) 
{
    A[i] = input.questionInt("enter element for A array:")
} console.log("Array A = ",A);

let B = [];
let N = input.questionInt("enter the no. of element for B : ");
for (let i=0; i<N; i++) 
{
    B[i] = input.questionInt("enter element for B array:")
}  console.log("Array B = ",B);


let find=[];
let k=0;
for (let i=0; i<M; i++) 
{
    for (let j=0; j<N; j++) 
    {
        if (A[i]==B[j]) 
        {
            find[k]=A[i];
            k++;
        }
    }
} 