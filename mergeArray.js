const notGood_mergeArray = (arr1, arr2) => {
  let newArr = [];
  let loopLength;
  if (arr1.length > arr2.length) {
    loopLength = arr1.length;
  } else {
    loopLength = arr2.length;
  }

  for (let i = 0; i < loopLength; i++) {
    if (arr1[i] < arr2[i]) {
      newArr.push(arr1[i]);
      newArr.push(arr2[i]);
    } else {
      newArr.push(arr2[i]);
      newArr.push(arr1[i]);
    }
  }
  console.log(newArr);
};

const mergeArray = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let newArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  console.log(newArr);
};

mergeArray([1, 4, 6, 17, 20], [2, 3, 5, 8, 9]);
