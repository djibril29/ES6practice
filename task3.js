const orders = [
  {
    id: 1001,
    userId: 1,
    restaurantId: 101,
    items: [
      { name: "Margherita", price: 15, quantity: 1 },
      { name: "4 Fromages", price: 20, quantity: 1 },
    ],
    status: "delivered",
    createdAt: "2026-09-01T19:30:00Z",
  },
  {
    id: 1002,
    userId: 1,
    restaurantId: 103,
    items: [{ name: "Sushi Combo", price: 30, quantity: 2 }],
    status: "delivered",
    createdAt: "2026-09-03T20:00:00Z",
  },
  {
    id: 1003,
    userId: 2,
    restaurantId: 102,
    items: [{ name: "Couscous Royal", price: 25, quantity: 1 }],
    status: "cancelled",
    createdAt: "2026-09-04T18:00:00Z",
  },
  {
    id: 1004,
    userId: 3,
    restaurantId: 102,
    items: [{ name: "Couscous Viande", price: 22, quantity: 2 }],
    status: "delivered",
    createdAt: "2026-09-05T12:30:00Z",
  },
];

const calculateOrderTotal = ({ items }) =>
  items.reduce((total, { price, quantity }) => total + price * quantity, 0);

const ordersWithTotal = orders.map((order) => ({
  ...order,
  total: calculateOrderTotal(order),
}));

console.log(ordersWithTotal);
