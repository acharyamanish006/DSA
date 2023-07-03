const linearSearch = (arr, targetValue) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) {
      console.log("Found at index: " + i);
    }
  }
};
linearSearch([1, 2, 3, 45, 6, 7], 7);
