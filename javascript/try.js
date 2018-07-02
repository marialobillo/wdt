
let shoppingCart = [20, 15];

function getTotalCost(prices){
  let total = 0;
  prices.map( item => {
    total += item;
  });

  return total;
}

getTotalCost(shoppingCart);
