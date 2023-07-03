const addTwoNum = function (l1, l2) {
  let list = [];
  let listId = 0;
  for (i = l1.length; i > 0; i--) {
    list[listId] = l1[i - 1];
    listId++;
  }
  console.log(list);
  let sum = list.toString();
  console.log(sum);
};
addTwoNum([1, 2, 3, 4]);
