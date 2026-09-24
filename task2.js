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

const newUser = {
  id: 4,
  name: "Mouna",
  email: "mouna@example.com",
  isPremium: true,
  address: {
    city: "Tunis",
    zone: "Lafayette",
    geo: { lat: 36.81, lng: 10.18 },
  },
};

const userUpdate = {
  id: 2,
  email: "amel.new@example.com",
  isPremium: true,
  address: {
    city: "Tunis",
    zone: "Lac 2",
  },
};

const usersWithNew = [...users, newUser];

const updatedUsers = users.map((user) => {
  if (user.id !== userUpdate.id) {
    return user;
  }

  return {
    ...user,
    ...userUpdate,
    address: {
      ...user.address,
      ...userUpdate.address,
    },
  };
});

console.log("users length:", users.length);
console.log("usersWithNew length:", usersWithNew.length);
console.log(updatedUsers.find((user) => user.id === 2));
