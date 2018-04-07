## Requirements 

Given an array of size _n_, find the majority element. The majority element is the element that appears more than (n / 2) times, _or more than half the length of the array_.

**Inputs:** Array of numbers  
**Outputs:** The majority element  
**Constraints:** None  
**Edge cases:** None  

**_Note: You may assume that there will always be a majority element within your input._** 

## Strategy

* Iterate through the array and keep track of the number of times an element has occurred.
* Figure how many times an element must occur before it can be considered a majority.
* At the end of each iteration, check if the requirements for majority number has been reached.
  * return it if condition met (thereby shortcircuiting the loop).
* At the end of iteration, return -1 because majority conditions haven't been met.
### Justification of strategy

There can only be one majority element based on the way we defined majority. So once we find that something has met that condition, we can return that element. Otherwise, if the majority element doens't exist, we can return -1.

## Define test cases


## Implementation skeleton 
    // Figure out number of times something must occur to meet conditions of majority  
    // Begin iteration of array  
      // store/update occurences within object
      // at the end of storing/updating, check if the number of times it has occured is equal to the majority-number  
        // return if true

## Actual implementation

https://gist.github.com/cen19/28b988383d47da815a4128adf5c784c4

## Execute test cases

## Big-O Analysis

**Time:** This is a linear time approach _O(n)_ in worst case scenario.  
**Space:** This is a linear storage approach _O(n)_ in worst case scenario.

## Optimization (if applicable)