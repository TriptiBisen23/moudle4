// Write a function squaresofnumbers which takes a number as a parameter, 
// and runs a loop from 1 to the given number, and makes the number and square of a number as key, value pair. See the example below.
// Input : 20
// Output :
// {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100, 11: 121, 12: 144, 13: 169, 
//     14: 196, 15: 225, 16: 256, 17: 289, 18: 324, 19: 361, 20: 400}

// function squaresofnumbers(n)
// {
//     let output = {}
//     for(let i =0; i<=n; i++)
//     {
//        output[i] = i*i
//     }
//      console.log(output);
// }   
//      squaresofnumbers(5)






     
//  Write a function that takes 2 strings as parameters and prints whose length is bigger, if both lengths are equal print two strings.
 //  Hint :Use len() builtin function.
  //  Input:   //  isequallenth(“hello”,”welcome”)
 //  isequallenth(“sonu”,”monu”)
     //  Output :  //  welcome    //  sonu  //  Monu
    
//  function isequallenth(str1,str2)
// {
//     if(str1.length == str2.length)
//     {
//         console.log(str1,str2);
      
//     }
//     else if(str1.length>str2.length)
//     {
//         console.log(str1);
//     }
//     else{
//     {
//         console.log(str2);
//     }
// }
// }
// isequallenth("sonu","monu");






// Write a function named multiplesOfNumbers which takes an argument as limit, 
// and runs a loop from o to that limit and prints the multiples of 3 and 5. Like the below.
// Input: 10
// 3 and 5 multiples => 3, 5, 6, 9, 10
// Output :33

// function multiplesOfNumbers(limit)
// {
//    var sum = 0
//    for(let i =0; i<=limit; i++)
//    {
//       if(i%3 === 0)
//       {
//         sum+=i;
//       }
//       if(i%5 === 0)
//       {
//         sum+=i;
//       }
//    } console.log(sum);
// }
// multiplesOfNumbers(6);





// Function to generate and print Fibonacci sequence up to a given number:

// function Fibonacci(limit)
// {
//     let num = 0, num1 = 1, nextTerm;
//     console.log(limit);
//     while(num <= limit)
//     {
//         console.log(num);
//         nextTerm = num + num1;
//         num = num1;
//         num1 = nextTerm;
//     } 
// }
// Fibonacci(6);




// Function to calculate the factorial of a number and print the result:

// function factorial(n)
// {
//    let fact = 1;
//     for(let i =1; i<=n; i++)
//     {
//         fact*=i;
//     } console.log(fact);
// }
// factorial(5)







// Function to reverse a given string and print the result:

// function reverse(str)
// {
//     let reversedStr = "";
//     for (let i = str.length-1; i>=0; i--)
//     {
//        reversedStr += str[i];
//     }
//     console.log (reversedStr);
// } 
// reverse("mother")

       //                               **********************************************************************



       //Question: Write a function named square that returns the square of a number.

// function square(n)
// {
//     return n*n;
// }
// console.log(square(4));




// Write a function named getMinMax that takes an array of numbers and returns an array with the minimum and maximum numbers.

// function getMinMax(a)
// {
//    const min = Math.min(...n);
//    const max = Math.max(...n);
//    return [min,max];
// }
// const result = getMinMax([1,2,3,4,5,6]);
// console.log(result);




// Function to calculate the factorial of a number and return the result:

// function factorial(n)
// {
//     let fact = 1;
//     for(let i =1; i<=n; i++)
//     {
//         fact*=i;
//     }
//     console.log(fact);
//     return fact;
// }
// factorial(4)







       //                               **********************************************************************


// Demonstrate how to use a switch statement to determine whether a given number is positive, negative, or zero.

// let n = 0;
// switch(true)
// {
//     case(n > 0):
//      console.log("positive");
//    break;
//     case(n<0):
//      console.log("negative");
//    break;
//     case(n===0):
//      console.log("zero");
//    break;
//   default:
//      console.log("invalid number");

// }
 




// How can you use a switch statement to handle different types of values (e.g., number and string) in JavaScript?

// let value = 98;
// switch (typeof value) {
//   case 'number':
//     console.log("It's a number");
//     break;
//   case 'string':
//     console.log("It's a string");
//     break;
//   default:
//     console.log("Unknown type");
// }




// Arrow Function Expressions

// const add = function(a, b) {

// const add = function(a,b)
// {
//     return a+b;
// } 
// const addArrow = (a,b) => a+b;
// console.log(addArrow(95,7));







  //                               **********************************************************************

      // 10 methods of object

// create a basic object

// const person ={
//     name : "aashi",
//     age : 23,
//     city : "bacheli"
// };
// console.log(person.age);




//access the properties

// console.log(person.name); 
// console.log(person.age); 





//add a method 

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }
// };

// person.greet(); // Output: Hello, my name is John.





//update a property 

// person.age = 31;
// console.log(person.age); 





//delete a property 

// delete person.city;
// console.log(person.city); 





//loop through all properties 

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(person[key]);
//     }
// }
// // Output:
// // name: John
// // age: 31
// // greet: function() { ... }





//create an object

// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// const person1 = new Person("Alice", 25, "London");
// console.log(person1.name); // Output: Alice





//check if a property exists

// console.log('age' in person); 




//merge two objects

// const additionalInfo = {
//     job: "Developer",
//     country: "USA"
// };

// const mergedPerson = { ...person, ...additionalInfo };
// console.log(mergedPerson);
// Output:
// {
//   name: "John",
//   age: 31,
//   greet: function() { ... },
//   job: "Developer",
//   country: "USA"
// }






//this keyword

// const person =
// {
//     name: "aashi",
//     age: 23,
//     country: "bacheli",
//     introduce: function()
//     {
//         return this.name, this.city;
//     }
// };
// console.log(person.introduce());






  //                               **********************************************************************

//Basic Callback Usage

// function greet(name, callback) {
//     console.log('Hello ' + name);
//     callback();
//   }
  
//   function sayGoodbye() {
//     console.log('Goodbye!');
//   }
  
//   greet('Alice', sayGoodbye);



//Callback with Arguments

// function add(a, b, callback) {
//     let result = a + b;
//     callback(result);
//   }
  
//   add(5, 10, function(sum) 
//   {
//     console.log('Sum is: ' + sum);
//   });
  





  //                               **********************************************************************

  //A
  //B C
  //D E F
  // G H I J  -   Without using array.

let 



