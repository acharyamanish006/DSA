/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
//
IV,IX,XL,XC,CD,CM
*/

var romanToInt = function (s) {
  let total = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] == "I") {
      if (s[i + 1] == "V") {
        
      }
      if (s[i + 1] == "X") {
      } else {
        total += 1;
      }
    }
    if (s[i] == "V") {
      total += 5;
    }
    if (s[i] == "X") {
      total += 10;
    }
    if (s[i] == "L") {
      total += 50;
    }
    if (s[i] == "C") {
      total += 100;
    }
    if (s[i] == "D") {
      total += 500;
    }
    if (s[i] == "M") {
      total += 1000;
    }
  }
  console.log(total);
};

romanToInt("MCMXCIV");
