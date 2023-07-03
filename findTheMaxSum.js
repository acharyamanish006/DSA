const findTheMaxSum = (arr, num) => {
  let maxSum = 0;
  let temSum = 0;
  if (arr.length < num) {
    console.log("arr is shorter then the given num");
    return;
  }

  for (i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  temSum = maxSum;
  for (i = num; i < arr.length; i++) {
    temSum = temSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, temSum);
  }
  console.log(maxSum);
  // return maxSum;
};

// findTheMaxSum([-1, -2, -3, -5, -8, -9, -4, -5], 5);

let total = 1;
const factor = (num) => {
  if (num <= 1) {
    console.log(total);
    return;
  }
  // console.log(num);
  total = num * total;
  factor(num - 1);
};

factor(3);
