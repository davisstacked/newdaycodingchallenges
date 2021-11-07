// My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

// I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

// Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!

// To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

// The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
// The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
// Each customer order (from either register) as it was finished by the kitchen. (servedOrders)
// Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

// We'll represent each customer order as a unique integer.

// As an example,

//   Take Out Orders: [1, 3, 5]
//  Dine In Orders: [2, 4, 6]
//   Served Orders: [1, 2, 4, 6, 5, 3]
// would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

// But,

  const TOO = [17, 8, 24, 40, 18]
  const DIO = [12, 19, 2]
  const SO = [17, 8, 12, 19, 24, 18, 2, 40]
// would be first-come, first-served.

// Note: Order numbers are arbitrary. They do not have to be in increasing order.

// RECURSIVE SOLUTION 
// This function will take O(n^2) time and O(n^2) space 

// function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

//   // base case
//   if (servedOrders.length === 0) {
//       return true;
//   }

//   // if the first order in servedOrders is the same as the
//   // first order in takeOutOrders
//   // (making sure first that we have an order in takeOutOrders)
//   if (takeOutOrders.length && takeOutOrders[0] === servedOrders[0]) {

//       // take the first order off takeOutOrders and servedOrders and recurse
//       return isFirstComeFirstServed(takeOutOrders.slice(1), dineInOrders, servedOrders.slice(1));

//   // if the first order in servedOrders is the same as the first
//   // in dineInOrders
//   } else if (dineInOrders.length && dineInOrders[0] === servedOrders[0]) {

//       // take the first order off dineInOrders and servedOrders and recurse
//       return isFirstComeFirstServed(takeOutOrders, dineInOrders.slice(1), servedOrders.slice(1));

//   // first order in servedOrders doesn't match the first in
//   // takeOutOrders or dineInOrders, so we know it's not first-come, first-served
//   } else {
//       return false;
//   }
// }

// console.log(isFirstComeFirstServed(TOO, DIO, SO))

// We can do better than this O(n^2) time and space cost. One way we could to that is to avoid slicing and instead keep track of indices in the array:

// const isFirstComeFirstServed = (takeOutOrders, dineInOrders, servedOrders, servedOrdersIndex, takeOutOrdersIndex, dineInOrdersIndex) => {
//   servedOrdersIndex = (typeof servedOrdersIndex !== "undefined") ? servedOrdersIndex : 0;
//   takeOutOrdersIndex = (typeof takeOutOrdersIndex !== "undefined") ? takeOutOrdersIndex : 0;
//   dineInOrdersIndex = (typeof dineInOrdersIndex !== "undefined") ? dineInOrdersIndex : 0;

//   // base case we've hit the end of servedOrders
//   // using the array's length will end the function after the array has been completely read. if we do length-1 for this then it will stop the function before doing it on the last element.
//   if (servedOrdersIndex === servedOrders.length) {
//     return true;
//   }

//   // if we still have orders in takeOutOrders 
//   // and the current order in takeOutOrders is the same 
//   // as the current order in served orders
//   if ((takeOutOrdersIndex < takeOutOrders.length) &&
//     (takeOutOrders[takeOutOrdersIndex] === servedOrders[servedOrdersIndex])) {
//     takeOutOrdersIndex++;

//     // if we still have orders in dineInOrders
//     // and the current order in servedOrders
//   } else if ((dineInOrdersIndex < dineInOrders.length) && 
//     (dineInOrders[dineInOrdersIndex] === servedOrders[servedOrdersIndex])) {
//     dineInOrdersIndex++;
//   }
  
//   // if the current order in servedOrders doesn't match
//   // the current order in takeOutOrders or dineInOrders, then we're not 
//   // serving first-come, first-served order.
//   else {
//     return false;
//   }

//   // the current order in servedOrders has now been "accounted for"
//   // so move on to the next one
//   servedOrdersIndex++;
//   return isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders, servedOrdersIndex, takeOutOrdersIndex, dineInOrdersIndex)
// }

// So now we're down to O(n) time, but we're still taking O(n) space in the call stack ↴ because of our recursion. 

// console.log(isFirstComeFirstServed(TOO, DIO, SO))

// Best Solution 

const isFirstComeFirstServed = (dineInOrders, takeOutOrders, servedOrders) => {
  // Keep pointers to the current index in takeOutOrders, dineInOrders, and servedOrders.
  let takeOutOrdersIndex = 0;
  let dineInOrdersIndex = 0;
  let servedOrdersIndex = 0;
  
  // Walk through servedOrders from beginning to end.
  for (let i = servedOrdersIndex; i < servedOrders.length; i++) {

    // If the current order in servedOrders is the same as the current customer order in takeOutOrders, increment takeOutOrdersIndex and keep going. This can be thought of as "checking off" the current customer order in takeOutOrders and servedOrders, reducing the problem to the remaining customer orders in the arrays.
    if (servedOrders[i] === takeOutOrders[takeOutOrdersIndex]) {
      takeOutOrdersIndex++;
    // Same as above with dineInOrders.
    } else if (servedOrders[i] === dineInOrders[dineInOrdersIndex]) {
      dineInOrdersIndex++;
      // If the current order isn't the same as the customer order at the front of takeOutOrders or dineInOrders, we know something's gone wrong and we're not serving food first-come, first-served.
    } else {
      return false;
    }
  }
  // If we make it all the way to the end of servedOrders, we'll check that we've reached the end of takeOutOrders and dineInOrders. If every customer order checks out, that means we're serving food first-come, first-served.

  // it's .length and not length - 1 because after we check the last index of the orders, if it matches we still increment the number so the final index will be one past the actual indexes.
  if (dineInOrdersIndex === dineInOrders.length && takeOutOrdersIndex === takeOutOrders.length) {
    return "we're serving food first come first serve!"
  }

}

// O(n) time and O(1) additional space.

console.log(isFirstComeFirstServed(TOO, DIO, SO))