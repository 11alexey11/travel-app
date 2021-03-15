const urlRu : string = `https://travel-application-backend.herokuapp.com/countries/ru`;
const urlEn : string = `https://travel-application-backend.herokuapp.com/countries/en`;
const urlFr : string = `https://travel-application-backend.herokuapp.com/countries/fr`;

const urlLogin : string = `https://intense-shelf-09539.herokuapp.com/login`;
const urlRegistration : string = `https://intense-shelf-09539.herokuapp.com/register`;

export const getData = async (lang: string) : Promise<Array<Object>> => {
  let url;

  if (lang === "ru") {
    url = urlRu;
  };

  if (lang === "en") {
    url = urlEn;
  };

  if (lang === "fr") {
    url = urlFr;
  };

  const res = await fetch(`${url}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
  }
  
  return await res.json();
};

export const getLogin = async (user: Object) => {
  const res = await fetch(urlLogin, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });

  return await res.json();
}

export const sendRegistration = async (user: Object) => {
  const res = await fetch(urlRegistration, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  })

  return await res.json();
}