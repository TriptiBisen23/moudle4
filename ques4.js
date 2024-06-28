// Chaat Items Availability Checker 

function getAvailableChaatItems(chaatItems, availableIngredients)
{
  const availableSet = new Set(availableIngredients);
  return chaatItems.filter(chaatItems=>
    chaatItems.ingredients.every(ingredients=>
      availableSet.has(ingredients)
    ).map(chaatItems=> chaatItems.name)
    
  )
}
const chaatItems = [
  { name: "Pani Puri", ingredients: ["puri", "pani", "mint", "potato"] },
  { name: "Bhel Puri", ingredients: ["puri", "sev", "potato", "onion", "tamarind"] },
  { name: "Dahi Puri", ingredients: ["puri", "dahi", "potato", "sev"] },
  { name: "Aloo Tikki", ingredients: ["potato", "onion", "chaat masala"] }
];
const availableIngredients = ["puri", "pani", "mint", "potato", "sev", "dahi"];
console.log(getAvailableChaatItems(chaatItems,availableIngredients));
























