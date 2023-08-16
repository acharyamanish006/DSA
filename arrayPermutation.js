var buildArray = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let newNums = nums[nums[i]];
    console.log(`nums ${nums[i]}`);
    console.log(`newNums ${newNums}`);
    ans.push(newNums);
  }
  console.log(ans);
  return ans;
};

buildArray([0, 2, 1, 5, 3, 4]);

//more optimize solution
var buildArray = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  console.log(ans);
  return ans;
};

buildArray([0, 2, 1, 5, 3, 4]);
