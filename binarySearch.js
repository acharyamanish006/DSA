const binarySearch = (arr, targetValue) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    middle = Math.round((start + end) / 2);
    // console.log(middle);
    if (targetValue === arr[middle]) {
      console.log(`index value of of target num is ${middle}`);
      return;
    } else if (targetValue > arr[middle]) {
      start = middle;
    } else {
      end = middle;
    }
    // console.log(middle);
  }
  return console.log("-1");
};
binarySearch([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14], 11);
