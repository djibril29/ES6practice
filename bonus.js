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
];

const cloneDeepUser = (user) => ({
  ...user,
  address: {
    ...user.address,
    geo: {
      ...user.address.geo,
    },
  },
});

const nourClone = cloneDeepUser(users[0]);
nourClone.name = "Nour Clone";
nourClone.address.city = "Sfax";
nourClone.address.geo.lat = 0;

console.log("clone city:", nourClone.address.city, "original city:", users[0].address.city);
console.log("clone lat:", nourClone.address.geo.lat, "original lat:", users[0].address.geo.lat);
