// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let j = target - nums[i];
//     for (let k = 0; k < nums.length; k++) {
//       if (j == nums[k] && k != i) {
//         return console.log(i, k);
//       }
//     }
//   }
// };

// twoSum([2, 7, 11, 15], 9);

/*Second Solution#^*/

// Step[1] => first we need to sort the array of num

let newTwoSum = (newNum, newTarget) => {
  let unSort = [];
  for (let i in newNum) {
    unSort[i] = newNum[i];
  }
  console.log(unSort);
  newNum.sort((a, b) => a - b);
  let left = 0;
  let right = newNum.length - 1;

  while (left < right) {
    if (newNum[left] + newNum[right] == newTarget) {
      console.log(unSort.indexOf(newNum[left]));
      console.log(unSort.indexOf(newNum[right]));
      // unSort.indexOf(newNum[left]);
      console.log(newNum);
      return console.log(left, right);
    }
    if (newNum[left] + newNum[right] > newTarget) {
      right -= 1;
    } else {
      left += 1;
    }
  }
};

newTwoSum([11, 12, 1, 6, 7, 8, 9, 2], 11);
