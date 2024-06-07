/*
    CIT 281 Project 3
    Name: Your Name
*/

module.exports = {
  coinCount,
};

function valueFromArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? valueFromArray(val) : acc + valueFromCoinObject(val),
    0
  );
}

// Return coin values from object
function valueFromCoinObject(obj) {
  const { denom = 0, count = 0 } = obj;
  return validDenomination(denom) ? denom * count : 0;
}

// Validate coin denomination, note using type equality test
function validDenomination(coin) {
  return [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1;
}

// Process coin objects, either as a single coin, or array of coins
// Coin object properties consist of:
// - denom: coin denomination (1, 5, 10, 25, 50, 100)
// - count: number of coins
function coinCount(...coinage) {
  return valueFromArray(coinage);
}

console.log("{}", coinCount({denom: 5, count: 3}));

/*
console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
// Extra credit
console.log("[{}]", coinCount(coins));
*/
