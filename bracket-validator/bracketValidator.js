let bracketValidator = function(input) {
  // use a stack
  var stack = [];
  var pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  
  for (let i = 0; i < input.length; i++) {
    var chr = input[i];
  
    if (pairs[chr]) {
      stack.push(chr);
    } else if (chr === '}' || chr === ']' || chr === ')') {
      if (pairs[stack.pop()] !== chr) {
        return false;
      }
    }
  }
  
  //return false if there are any unclosed brackets
  return stack.length === 0;
};

