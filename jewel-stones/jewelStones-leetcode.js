var numJewelsInStones = function(J, S) {
  return filtered = S.split('').filter(el => J.indexOf(el) >= 0).join('').length;


};

let testJ = 'aA'; 
let testS = 'aAAbbbb';

console.log(numJewelsInStones(testJ, testS));