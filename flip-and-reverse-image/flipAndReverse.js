const flipAndReverse = function(array) {
  return array.map(innerArray => {
    let reversed = inner.join('').reverse().split('');
    reversed.forEach(int => {
      if (int === 1) { 
        return 0;
      } else if (int === 0) { return 1; }
    });
    return reversed;
  });
};