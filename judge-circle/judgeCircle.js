var judgeCircle = function(moves) {
  let horizontal = 0;
  let vertical = 0;
  
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') {
      vertical += 1;
    }
    if (moves[i] === 'D') {
      vertical -= 1;
    }
    if (moves[i] === 'L') {
      horizontal -= 1;
    }
    if (moves[i] === 'R') {
      horizontal += 1;
    }
  }

  return horizontal + vertical === 0 ? true : false;
};

let string = 'RLUURDDDLU';
console.log(judgeCircle(string));

