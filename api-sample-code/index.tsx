const sampleCode = `fetch("https://myjsonapi.vercel.app/api/users")
.then((response) => response.json())
.then((result) => console.log(result))`;

const fetchSampleCodes = {
  fetch: `fetch("https://myjsonapi.vercel.app/api/users")
.then((response) => response.json())
.then((result) => console.log(result))`,

  axios: `axios.get("https://myjsonapi.vercel.app/api/users")
.then((response) => response.json())
.then((result) => console.log(result))`,

  vue: `useFetch("https://myjsonapi.vercel.app/api/users")
.then((response) => response.json())
.then((result) => console.log(result))`,

  node: `fetch("https://myjsonapi.vercel.app/api/users")
.then((response) => response.json())
.then((result) => console.log(result))`,

  nextjs: `async function getData() {
  const res = await fetch('https://api.example.com/...');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main></main>;
}`,
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
  ...
]`;

export { sampleCode, apiResponse, fetchSampleCodes };
