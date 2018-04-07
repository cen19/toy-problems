var matrixReshape = function(nums, r, c) {
  let oldR = nums.length;
  let oldC = nums[0].length;
  if ((r * c) > (oldR * oldC)) {
    return nums;
  }
  let rowCounter = 0;
  let columnCounter = 0;
  let output = [];
  
  
  for (let i = 0; i < r; i++) {
    let row = [];
    for (let j = 0; j < c; j++) {
      row.push(nums[rowCounter][columnCounter]);
      columnCounter++;
      if (columnCounter > oldC - 1) {
        rowCounter++;
        columnCounter = 0;
      }            
    }
    output.push(row);
  }
  return output;
};

let test = [[1, 2], [3, 4]];
console.log(matrixReshape(test, 1, 4));