## Requirements 

Determine whether an integer is a palindrome. Do this without extra space.



* input: Integer
* output: true or false, if integer is palindrome
* constraints: no extra space
* edge cases: negative integers

## Strategy

_In this case, we will say that a negative number cannot be a palindome because the '-' cannot be equal to the last digit._

The easiest and common way to approach this would be to convert the integer to a string, reverse the string and compare it.
We cannot use this approach because it would involve using extra space.


So let's use _math_. Let's use the sample number of 1234.
* To get the last digit of our number we can use modulo ( % )
  * 1234 % 10 will give us 4
* To remove the 4 from the end, we will use division combined with Math.floor
  * Math.floor(1234 / 10) will give us 123


### Justification of strategy

_We want to keep removing digits off the Integer until we have reached the halfway point which is decided when the original number becomes less than the paldinrome part we've been building._

## Define test cases

* Negatives should always return false because the '-' can never be mirrored within an integer
* Numbers ending in 0 should also return false because there are no 0 headings aside from 0
  * 0 should return true
* For odd number of digits, the middle digit never matters because it _is_ the midpoint

## Implementation skeleton

* example: 1221 split in half is --- 12   21 ---, if you reverse the ending part, you can then compare the reversed part to what's left of the original
  * in motion would be:
    * 122   1  
    * 12   21  

  _note_: you can build the reversed part to incrementally become the future reversed
  * it would look something like this:
    * 122   (_1 * 10_) --> 122  10
    * 12   (10 + (_2 * 1_)) --> 12 12
---
    // quickly rule out known situations such as negative, numbers ending with 0, and 0  
    // while given number is bigger than reversed part  
      // remove a digit off the end and use it build the reversed part  
    // stop removing numbers when the next iteration will result in a smaller number

    // compare reversed part with what's left of original
      // return that boolean

## Actual implementation

https://gist.github.com/cen19/fd4a455f7679d058cf98db2bcb35e2d9

## Execute test cases

## Big-O Analysis

With our current solution it would always be half of linear because we are always iterating through half the number.

## Optimization (if applicable)

Try to compare ends of the Integer to catch early cases of it not being a palindrome rather than building the halves out fully.