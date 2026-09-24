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

const getRestaurantsByCity = (city = "Tunis") =>
  restaurants
    .filter((restaurant) => restaurant.city === city)
    .map(({ name }) => name);

const hasTag = ({ tags }, tag) =>
  tags.some((currentTag) => currentTag.toLowerCase() === tag.toLowerCase());

const areAllHighRated = (restaurantList, minRating) =>
  restaurantList.every(({ rating }) => rating >= minRating);

const tunisRestaurants = restaurants.filter(({ city }) => city === "Tunis");
const allTunisAtLeast4 = areAllHighRated(tunisRestaurants, 4);

const arianaRestaurants = restaurants.filter(({ city }) => city === "Ariana");
const arianaHasTraditional = arianaRestaurants.some((restaurant) =>
  hasTag(restaurant, "traditional"),
);

console.log("Tunis names:", getRestaurantsByCity("Tunis"));
console.log("All Tunis restaurants >= 4.0:", allTunisAtLeast4);
console.log("Ariana has traditional:", arianaHasTraditional);
