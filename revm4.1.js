// function getAdvisory(T, R) {
//     // Convert temperature from Celsius to Fahrenheit
//     let fahrenheit = (T * 9/5) + 32;
    
//     let attire;
//     let umbrella;
    
//     if (R === 1) {
//         umbrella = " and umbrella";
//     } else {
//         umbrella = "";
//     }
    
//     if (fahrenheit < 50) {
//         attire = "heavy coat";
//     } else if (fahrenheit >= 50 && fahrenheit <= 68) {
//         attire = "light jacket";
//     } else {
//         attire = "light clothing";
//     }
    
//     if (R === 1) {
//         console.log(`Temperature: ${T}°C, Condition: raining, Advisory: ${attire}${umbrella}`);
//     } else {
//         console.log(`Temperature: ${T}°C, Condition: not raining, Advisory: ${attire}`);  
//     }
// }

// Example usage: 
// getAdvisory(5, 1);   // Expected output: Temperature: 5°C, Condition: raining, Advisory: heavy coat and umbrella
// getAdvisory(20, 0);  // Expected output: Temperature: 20°C, Condition: not raining, Advisory: light jacket
// getAdvisory(25, 1);  // Expected output: Temperature: 25°C, Condition: raining, Advisory: light clothing and umbrella





