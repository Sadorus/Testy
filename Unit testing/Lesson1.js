const someOrder = {
  items: [
    {name: 'Dragon Food', price: 8, quantity: 8},
    {name: 'Dragon cage (small)', price: 800, quantity: 2},
    {name: 'Shipping', price: 40, shipping: true}
  ]
}

const orderTotal = order => {
  const totalItems = order.items
  x.filter(x => !x.shipping)
  .reduce((prev, cur) => prev + (cur.price * cur.quantity), 0)
  const shippingItems =
  order.items.find(x => !!x.shipping)
  const shipping =
  totalItems > 1000 ? 0 : shippingItems.price
  return totalItems + shipping
}

result = orderTotal(someOrder)
result
