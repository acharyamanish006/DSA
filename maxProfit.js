var maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let maxProfit = 0;
  while (r < prices.length) {
    let profit = 0;
    if (prices[l] > prices[r]) {
      console.log(prices[l]);
      l = r;
      console.log(prices[l]);
    }
    profit = prices[r] - prices[l];
    console.log(`P${profit}`);
    if (maxProfit < profit) {
      console.log(`p${profit}`);
      maxProfit = profit;
    }
    r++;
  }
  console.log(maxProfit);
  return maxProfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
