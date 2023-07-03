const bubbleShort = (arr) => {
  for (i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) {
      return console.log(arr);
    }
  }
  console.log(arr);
};

bubbleShort([12, 34, 5, 6, 78, 5, 3, 9, 866, 57, 9, 0, 8, 7]);
