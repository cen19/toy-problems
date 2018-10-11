const marsExploration = function(s) {
  let count = 0;
  
  
  for (let i = 0; i < s.length; i++) {
    if (i % 3 === 0 || i % 3 === 2) {
      if (s[i] !== 'S') {
        console.log(i);
        count++; 
      }
    } else {
      if (s[i] !== 'O') {
        console.log(i);

        count++;
      }
    }
  }
  
  return count;
};

console.log(marsExploration('SOS'));

console.log(5 % 3);