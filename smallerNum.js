let smallerNumbersThanCurrent = function (nums) {
  let resultArray = [];

  for (i = 0; i < nums.length; i++) {
    let count = 0;
    for (j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    resultArray.push(count);
  }
  console.log(resultArray);
};

smallerNumbersThanCurrent([6, 5, 4, 8]);
