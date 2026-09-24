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

const restaurants = [
  {
    id: 101,
    name: "Pizza Palace",
    city: "Tunis",
    tags: ["pizza", "italian", "fast-food"],
    rating: 4.5,
    deliveryFee: 3.5,
  },
  {
    id: 102,
    name: "Couscous Corner",
    city: "Ariana",
    tags: ["tunisian", "traditional"],
    rating: 4.8,
    deliveryFee: 2,
  },
  {
    id: 103,
    name: "Sushi Spot",
    city: "Tunis",
    tags: ["sushi", "japanese"],
    rating: 4.2,
    deliveryFee: 4,
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

const getUserRecommendation = (userId) => {
  const user = users.find(({ id }) => id === userId);
  const { name, isPremium, address } = user;
  const { city } = address;

  const userOrders = orders.filter(
    (order) => order.userId === userId && order.status === "delivered",
  );

  const orderCountByRestaurant = userOrders.reduce(
    (counts, { restaurantId }) => ({
      ...counts,
      [restaurantId]: (counts[restaurantId] || 0) + 1,
    }),
    {},
  );

  const topRestaurantId = Object.entries(orderCountByRestaurant).reduce(
    (topId, [restaurantId, count]) => {
      if (topId === null) {
        return Number(restaurantId);
      }

      const topCount = orderCountByRestaurant[topId];
      return count > topCount ? Number(restaurantId) : topId;
    },
    null,
  );

  const topRestaurant = restaurants.find(({ id }) => id === topRestaurantId);

  const note = isPremium
    ? `As a premium user in ${city}, you get free delivery on orders over 50 TND.`
    : `Become a premium user in ${city} and get a discount on your next order.`;

  return {
    user: name,
    favoriteCity: city,
    topRestaurant: topRestaurant.name,
    isPremium,
    note,
  };
};

console.log(getUserRecommendation(1));
