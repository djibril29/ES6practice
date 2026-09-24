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

const getUserSummary = ({
  name,
  email,
  isPremium,
  address: { city = "Unknown", zone = "Unknown" } = {},
}) => {
  const userType = isPremium ? "Premium user" : "Standard user";
  return `${name} (${email}) - ${userType} in ${zone}, ${city}`;
};

const userSummaries = users.map(getUserSummary);

console.log(userSummaries); 
