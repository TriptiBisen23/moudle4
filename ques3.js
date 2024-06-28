// Username Masking

function  maskUsername(Username)
{
   const  replacements = {
    'a' : '@',
    's' : '$',
    'i' : '!',
    'o' : '0',
    'E' : '3'

   };
const maskUsername = Username.split('').map(char=>
replacements[char] || char).join ('');
return maskUsername;


}
console.log(maskUsername("alice"));
