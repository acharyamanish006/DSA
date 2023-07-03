// let isPalindrome = function (x) {
//   let rev = "";
//   for (let i = x.length; i > 0; i--) {
//     console.log(x[i - 1]);
//     rev += x[i - 1];
//   }
//   console.log(rev);
//   if (x.toString() === rev.toString()) {
//     console.log("j");
//     return true;
//   } else {
//     console.log("h");
//     return false;
//   }
//   // for (let i = 0; i < x.length; i++) {
//   //   console.log(x[i]);
//   // }
// };
// isPalindrome("hhh");

// let isPalindrome = function (x) {
//   let rev = "";
//   let y = x.toString();
//   for (i = y.length; i > 0; i--) {
//     rev += y[i - 1];
//   }
//   if (x.toString() === rev) {
//     console.log("y");
//   } else {
//     console.log("n");
//   }
// };
// isPalindrome(123);
// let isPalindrome = function (x) {
//   let rev = "";
//   let y = x.toString();
//   for (i = y.length; i > 0; i--) {
//     if (!Number(y[i - 1])) {
//       // return (rev = y[i - 1]);
//       if (y[i - 1] == 0) {
//         rev += y[i - 1];
//       }
//       console.log(y[i - 1]);
//       rev = y[i - 1] + rev;
//     } else {
//       rev += y[i - 1];
//     }
//   }

//   if (Math.pow(-2, 31) <= Number(rev) && Number(rev) <= Math.pow(2, 31) - 1) {
//     console.log(Math.pow(-2, 31));
//     console.log(Math.pow(2, 31) - 1);
//     console.log(Number(rev));
//   } else {
//     console.log("f");
//   }

//   // console.log(Number("0"));
// };
// isPalindrome(123);

// var isPalindrome = function (x) {
//   var s = x.toString();
//   var t = s.split("").reverse().join("");
//   console.log(t);
//   if (s == t) {
//     console.log("true");
//     return true;
//   }
// };
// isPalindrome(121);
// let comment = [];
// let id = "hey";
// comment["hi"] = {
//   id: {
//     name: "<NAME>",
//   },
// };
// comment["hello"] = {
//   id: {
//     name: "<NAME>",
//   },
// };

// comment.push({
//   id: {
//     name: "<NAME>",
//   },
// });
// comment.push(
//   (id = {
//     name: "AME>",
//   })
// );
// comment.push({
//   id: {
//     name: ">",
//   },
// });
// console.log(comment);

// function countChar(Char) {
//   let freq = {};
//   for (let i = 0; i < Char.length; i++) {
//     let val = Char[i];
//     if (freq[val] == 1) {
//       freq[val]++;
//     } else {
//       freq[val] = 1;
//     }
//     // console.log(Char[i]);
//     // if (freq[Char[i]] != 0) {
//     // } else {
//     // freq[Char[i]] = 1;
//     // }
//   }
//   console.log(freq);
// }
// countChar("hello");
