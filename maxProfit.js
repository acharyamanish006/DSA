var maxProfit = function (prices) {
  let buy;
  let sell;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        console.log("sell");
      }
    }
  }
};
maxProfit([7, 1, 5, 3, 6, 4]);
