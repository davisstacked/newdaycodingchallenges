// You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.

// While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

// Each type of cake has a weight and a value, stored in an object with two properties:

// weight: the weight of the cake in kilograms
// value: the monetary value of the cake in British shillings
// For example:

//   // Weighs 7 kilograms and has a value of 160 shillings
// { weight: 7, value: 160 }

// // Weighs 3 kilograms and has a value of 90 shillings
// { weight: 3, value: 90 }

// JavaScript
// You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

// Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

// For example:

  const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const capacity = 20;

// maxDuffelBagValue(cakeTypes, capacity);
// capacity will be a number which I will need to subtract different cakeTypes.weight from 
// // Returns 555 (6 of the middle type of cake and 1 of the last type of cake)

// JavaScript
// Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about keeping our algorithms flexible and comprehensive.

// example solution using a greedy algorithm for getting a cake that has a weight of one. 

// What if instead of looking at the value of the cakes, we looked at their value/weight ratio? Here are our example cakes again:

//   { weight: 1,  value: 30 }
// { weight: 50, value: 200 }

// JavaScript
// The second cake has a higher value, but look at the value per kilogram.

// The second type of cake is worth 4 shillings/kg (200/50200/50), but the first type of cake is worth 30 shillings/kg (30/130/1)!

// Ok, can we just change our algorithm to use the highest value/weight ratio instead of the highest value? We know it would work in our example above, but try some more tests to be safe.

function maxDuffelBagValue(cakeTypes, weightCapacity) {

  // We make an array to hold the maximum possible value at every
  // duffel bag weight capacity from 0 to weightCapacity
  // starting each index with value 0
  const maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

  for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {

    // Set a variable to hold the max monetary value so far for currentCapacity
    let currentMaxValue = 0;

    cakeTypes.forEach(cakeType => {

      // if the cake weighs as much or less than the current weight capacity
      // It's possible taking the cake would get a better value
      if (cakeType.weight <= currentCapacity) {
        // So we check: should we use the cake or not?
        // if we use the cake, the most kilograms we can include in addition to the cake
        // We're adding is the current capacity minus the cake's weight. We find the max
        // value at that integer capacity in our array maxValuesAtCapacities
        const maxValueUsingCake =
          cakeType.value +
          maxValuesAtCapacities[currentCapacity - cakeType.weight];
        
        // Now we see if it's worth taking the cake. how does the 
        // value with the cake compare to the currentMaxValue?
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    });

    // Add each capacity's max value to our array so we can use them
    // When calculating all the remaining capacities.
    maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }
}

