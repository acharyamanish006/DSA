const stringSearch = (string, pattern) => {
  let count = 0;

  for (i = 0; i < string.length; i++) {
    for (j = 0; j < pattern.length; j++) {
      console.log(i, j);
      //   console.log(i + j);
      //   console.log(string[i + j]);
      if (pattern[j] !== string[i + j]) {
        // console.log("not found");cls
        break;
      }
      if (j === pattern.length - 1) {
        console.log("found");
        count++;
      }
    }
  }
  console.log(count);
};

stringSearch("hey how are you", "are");
