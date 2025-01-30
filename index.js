function hasTargetSum(array, target) {
  // Write your algorithm here

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        // console.log(array[i], array[j]);
        return true;
      }
    }
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Rewrite the Problem in Your Own Words
find two numbers in the array that equals the target number. return true or false.
*/

/* 
  Add your pseudocode here
function(array, target)
nested iteration:
  for of loop array = i
    for of loop array = j
    if i + j = target: return true, else continue looking
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([8, 5, 12, 56, 23, 1, 13], 25));
}

module.exports = hasTargetSum;
