// find if there is a repeat with space limitations

// a common method is jsut to use a set to keep track of what we've seen
const simpleFindRepeat = (numbers) => {
  let numbersSeen = new Set();

  // using a for loop instead of using forEach because we need to return/break out when a situation is met
  for (let i = 0; i < numbers.length; i++) {
    if (numbersSeen.has(numbers[i])) {
      return numbers[i];
    } else {
      numbersSeen.add(number);
    }
  }
  // throw an error if no duplicate is found
  throw new Error('no duplicate');
};

// this method is linear time and linear storage. Although this works, it goes against the 0(1) constant space goal

// we could also just walk through the array each time we encounter an element to see if there is a duplicate
const simpleFindRepeat2 = (numbers) => {
  for (let needle = 1; needle < numbers.length; needle++) {
    let hasBeenSeen = false;

    for (let i = 0; i < numbers.length; i++) {
      let number = numbers.length;
      if (number === needle) {
        if (hasBeenSeen) {
          return number;
        } else {
          hasBeenSeen = true;
        }
      }
    }
  }
  // no duplicate
  throw new Error('no duplicate');
};
// this will result in 0(1) space but 0(n^2) time 
// time complexity needs to be improved

// sorting would help with time complexity but would take up linear space to store the storted array, so we will need to sort in place. however this could cause problems because we are destroying the input



// Our approach is similar to a binary search, except we divide the range of possible answers in half at each step, rather than dividing the array in half.

// 1. find the number of integers in our input array which lies within the range 1 and n/2

// 2. compare that to the number of possible unique integers in teh same range.
// 3. if the number of actual integers is greater than the number of possible integers, we know there is a duplicate in teh range, 1 -> n/2 so we iteratively use the same approach on that range
// 4. if the number of actual integers is not greater than the numnber of possible integers, we know there must be a duplicate in teh range n/2 + 1..n, so we iteratively use the same apparoach on that arnge
// 5. at some point our range will contain just 1 integer, which will be our answer

const solutionFindRepeat = function(array) {
  let floor = 1;
  let ceiling = array.length - 1;

  while (floor < ceiling) {
    // divide the range into upper and lower range such that they don't overlap
    let midpoint = Math.floor(floor + ((ceiling - floor) / 2));
    let lowerRangeFloor = floor;
    let lowerRangeCeiling = midpoint;
    let upperRangeFloor = midpoint + 1;
    let upperRangeCeiling = ceiling;

    let distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

    // count the numnber of items in lower range
    let itemsInLowerRange = 0;
    array.forEach(function(item) {
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange += 1;
      }
    });

    if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }

  return floor;
};


// BEAST MODE
  // we can achieve linear time and constant space costs
  // involves strong background in graph theory

  // image each item in teh array as a node in a linked list. In any linked list, each node has a value and a pointer


// A. we know the position of a node with multiple incoming pointers is a duplicate in our array because the nodes that pointed to it must have the same value.
 // B. we find a node with multiple incoming pointers by finding the first node in a cycle.
// C. We find the first node in a cycle by finding the length of the circle and advancing two pointers:
    // one starting at the head of the linked list, and the other starting ahead as many steps as there are steps in the cycle. The pointers will meet at the first node in the cycle.
// D. we find the length of a cycle by remembering a position inside the cycle and counting the number of steps it takes to get back to that position.
// E. We get inside a cycle by starting at the head and walking n steps. we know the head of the list is at position (n + 1)

// for step E.

const findDuplicateFinalBeast = (intArray) => {
  const n = intArray.length - 1;

  // step1: get inside the cycle
  // start at position n + 1 and then walk n steps to find a position guaranteed to be in a cycle
  let positionInCycle = n + 1;
  for (let i = 0; i < n; i++) {
    positionInCycle = intArray[positionInCycle - 1];
  }
  // after that loop, we know we are in the cycle
  // remember this position and step ahead until we come back to it, counting the number o steps

  // step2: find the length of the cycle
  // find the length of the cycle by remembering a position in the cycle
  // counting the steps it takes to get back to that position

  const rememberedPositionInCycle = positionInCycle;
  // step ahead one time, and count it
  let currentPositionInCycle = intArray[positionInCycle - 1];
  let cycleStepCount = 1;

  while (currentPositionInCycle !== rememberedPositionInCycle) {
    currentPositionInCycle = intArray[currentPositionInCycle - 1];
    cycleStepCount += 1;
  }

  // now that we have the head and the length of the cycle, we need to find the first node in a cycle (c). We set up two pointers: 1 at the head, and 1 ahead as many steps as there are nodes in the cycle. These two pointers form our 'stick'

  // step3: find the first node of the cycle
  // start two pointers
  // (1) at position n + 1
  // (2) ahead as many as there are nodes in the cycle
  let pointerStart = n + 1;
  let pointerAhead = n + 1;
  for (let i = 0; i < cycleStepCount; i++) {
    pointerAhead = intArray[pointerAhead - 1];
  }

  while (pointerStart !== pointerAhead) {
    pointerStart = intArray[pointerStart - 1];
    pointerAhead = intArray[pointerAhead - 1];
  }

  return pointerStart;
};