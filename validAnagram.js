function validAnagram(first, second) {
  // add whatever parameters you deem necessary - good luck!
  let firstFrequency = {};
  if (first.length != second.length) {
    return false;
  }

  for (let i in first) {
    // console.log(first[i]);
    let char = first[i];
    firstFrequency[char]
      ? (firstFrequency[char] += 1)
      : (firstFrequency[char] = 1);
  }
  // console.log(firstFrequency);
  for (let i in second) {
    // console.log(second[i]);
    let char = second[i];
    if (!firstFrequency[char]) {
      return console.log("false");
    }
    firstFrequency[char] -= 1;
  }
  console.log("true");
}

validAnagram("hpp", "pph");
