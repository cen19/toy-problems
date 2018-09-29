/* 

Your company delivers breakfast via autonomous quadcopter drones. And something mysterious has happened.

Each breakfast delivery is assigned a unique ID, a positive integer. When one of the company's 100 drones takes off with a delivery, the delivery's ID is added to an array, deliveryIdConfirmations. When the drone comes back and lands, the ID is again added to the same array.

After breakfast this morning there were only 99 drones on the tarmac. One of the drones never made it back from a delivery. We suspect a secret agent from Amazon placed an order and stole one of our patented drones. To track them down, we need to find their delivery ID.

Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.

The IDs are not guaranteed to be sorted or sequential. Orders aren't always fulfilled in the order they were received, and some deliveries get cancelled before takeoff.

*/

const findMissingDrone = function(array) {
  let store = {};

  array.forEach(function(id) {
    // store it if it doesn't exist
    if (!store.hasOwnProperty(id)) {
      store[id] = true;
    } else {
      delete store[id];
    }
  });

  for (let id in store) {
    return id;
  }
};


// advanced method using bitwise XOR

const findMissing = function(array) {
  let missingDrone = 0;

  // we can do this because we are dealing with integers
  array.forEach(function(id) {
    missingDrone ^= id;
  });

  return missingDrone;
};


const testArray = [5, 2, 1, 2, 1, 6, 6, 7, 3, 3, 7];
console.log(findMissing(testArray));
console.log(findMissingDrone(testArray));