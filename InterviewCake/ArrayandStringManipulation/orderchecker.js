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

  const TOO = [17, 8, 24]
  const DIO = [12, 19, 2]
  const SO = [17, 8, 12, 19, 24, 2]
// would be first-come, first-served.

// Note: Order numbers are arbitrary. They do not have to be in increasing order.

// RECURSIVE SOLUTION 

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  // base case
  if (servedOrders.length === 0) {
      return true;
  }

  // if the first order in servedOrders is the same as the
  // first order in takeOutOrders
  // (making sure first that we have an order in takeOutOrders)
  if (takeOutOrders.length && takeOutOrders[0] === servedOrders[0]) {

      // take the first order off takeOutOrders and servedOrders and recurse
      return isFirstComeFirstServed(takeOutOrders.slice(1), dineInOrders, servedOrders.slice(1));

  // if the first order in servedOrders is the same as the first
  // in dineInOrders
  } else if (dineInOrders.length && dineInOrders[0] === servedOrders[0]) {

      // take the first order off dineInOrders and servedOrders and recurse
      return isFirstComeFirstServed(takeOutOrders, dineInOrders.slice(1), servedOrders.slice(1));

  // first order in servedOrders doesn't match the first in
  // takeOutOrders or dineInOrders, so we know it's not first-come, first-served
  } else {
      return false;
  }
}

console.log(isFirstComeFirstServed(TOO, DIO, SO))