const users = [
  {
    id: 1,
    name: "Nour",
    email: "nour@example.com",
    isPremium: true,
    address: {
      city: "Tunis",
      zone: "Boumhal",
      geo: { lat: 36.68, lng: 10.23 },
    },
  },
  {
    id: 2,
    name: "Amel",
    email: "amel@example.com",
    isPremium: false,
    address: {
      city: "Tunis",
      zone: "Lac 1",
      geo: { lat: 36.84, lng: 10.27 },
    },
  },
  {
    id: 3,
    name: "Ahmed",
    email: "ahmed@example.com",
    isPremium: false,
    address: {
      city: "Ariana",
      zone: "Ennasr",
      geo: { lat: 36.89, lng: 10.19 },
    },
  },
];

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

// Cancelled orders stay in ordersCount, because the customer still placed them.
// They are left out of totalSpent, which only adds delivered orders.
const ordersByUser = users.reduce((summary, { id, name }) => {
  const userOrders = orders.filter(({ userId }) => userId === id);

  const totalSpent = userOrders.reduce((sum, order) => {
    const spent = order.status === "delivered" ? calculateOrderTotal(order) : 0;
    return sum + spent;
  }, 0);

  const countCancelledOrders = true;
  const ordersCount = userOrders.reduce(
    (count, { status }) =>
      count + (status === "cancelled" ? (countCancelledOrders ? 1 : 0) : 1),
    0,
  );

  return {
    ...summary,
    [id]: {
      userName: name,
      totalSpent,
      ordersCount,
    },
  };
}, {});

console.log(ordersByUser);
