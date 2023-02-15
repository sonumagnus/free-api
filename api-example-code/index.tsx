const fetchCode = `fetch("https://api.github.com/users")
.then((response) => response.json())
.then((result) => console.log(result))`;

const fetchExmaple = {
  fetch: `fetch("https://api.github.com/users")
.then((response) => response.json())
.then((result) => console.log(result))`,

  axios: `axios.get("https://api.github.com/users")
.then((response) => response.json())
.then((result) => console.log(result))`,

  vue: `useFetch("https://api.github.com/users")
.then((response) => response.json())
.then((result) => console.log(result))`,

  node: `node("https://api.github.com/users")
.then((response) => response.json())
.then((result) => console.log(result))`,
};

const apiResponse = `[
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",u
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        LNG: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
    },
  },
]`;

export { fetchCode, apiResponse, fetchExmaple };
