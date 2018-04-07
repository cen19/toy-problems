const isOneBitCharacter = function(bits) {
  let tracker = '';
  
  for (let i = 0; i < bits.length - 1; i++) {
    if (tracker === 1 && (bits[i] === 1 || bits[i] === 0)) {
      tracker = ''; // reset tracker
    } else if (bits[i] === 1) {
      tracker = 1;
    }
  }
  return tracker === '';
};

let test1 = [1, 1, 0];
let test2 = [1, 1, 1, 0];

console.log(isOneBitCharacter(test1));
console.log(isOneBitCharacter(test2));