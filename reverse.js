var maxArea = function (height) {
  let res = 0;
  let right = height.length;
  let left = 0;
  while (left < right) {
    let area = Math.min(height[right], height[left]) * (right - left);
    if (area > res) {
      res = area;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  console.log(res);
  return res;
};
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
