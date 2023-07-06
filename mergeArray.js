// const notGood_mergeArray = (arr1, arr2) => {
//   let newArr = [];
//   let loopLength;
//   if (arr1.length > arr2.length) {
//     loopLength = arr1.length;
//   } else {
//     loopLength = arr2.length;
//   }

//   for (let i = 0; i < loopLength; i++) {
//     if (arr1[i] < arr2[i]) {
//       newArr.push(arr1[i]);
//       newArr.push(arr2[i]);
//     } else {
//       newArr.push(arr2[i]);
//       newArr.push(arr1[i]);
//     }
//   }
//   console.log(newArr);
// };

const mergeArray = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let newArr = [];
  if (arr1 == undefined) {
    return;
  }

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
  return newArr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArray(left, right);
};
mergeSort([0, 6, 8, 91, 55, 77, 3, 9]);
