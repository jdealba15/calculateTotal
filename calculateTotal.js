var items = [
  {item: "apple", price: 0.5},
  {item: "bannana", price: 0.25},
  {item: "orange", price: 0.75}
];

function calculateTotal(items) {

  let sum = 0;

  for(let i = 0; i < items.length; i++){
    sum += items[i].price;
  }

  return sum;
}

console.log(calculateTotal(items));