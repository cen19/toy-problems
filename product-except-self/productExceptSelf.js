var productExceptSelf = function(nums) {
  let store = {};
  let output = [];

  for (let i = 0; i < nums.length; i ++) {
    let el = nums[i];
    if (!store[el]) {
      store[el] = {
        count: 1,
        idx: [i]
      };
    } else {
      store[el]['count'] += 1;
      if (el === 0 && store[el]['count'] > 1) {
        return nums.map((el) => 0);
      }
      store[el]['idx'].push(i);
    }
  }

  for (let key in store) {
    let product = 1;
    store[key]['count'] -= 1;
    
    for (let prop in store) {
      product *= Math.pow(Number(prop), store[prop]['count']);
      for (let j = 0; j < store[key]['idx'].length; j++) {
        output[store[key]['idx'][j]] = product;
      }
    }
    store[key]['count'] += 1;
  }
  return output;
};

let array = [1, 2, 3, 4];
console.log(productExceptSelf(array));

let getProductsOfAllIntsExceptAtIndex = function(intArray) {
  // get array and get the product of so far
  // reverse and do the same, but multiply it with the existing part
  let currentProduct = 1;
  let output = [];

  for (let i = 0; i < intArray.length; i++) {
    output[i] = currentProduct;
    currentProduct *= intArray[i];
  }
  currentProduct = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    output[j] *= currentProduct;
    currentProduct *= intArray[j];
  }
  return output;
};

console.log(getProductsOfAllIntsExceptAtIndex(array));