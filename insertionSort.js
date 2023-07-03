const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currVal;
  }
  console.log(arr);
};
insertionSort([4, 3, 2, 1]);
