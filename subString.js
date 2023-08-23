var lengthOfLongestSubstring = function (s) {
  let len = 0;
  let longest = 0;
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    let fString = s[i];
    len++;
    obj[fString] = i;
  }
  console.log(obj);
};

lengthOfLongestSubstring("cnbas");
