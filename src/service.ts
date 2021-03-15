const urlRu: string = `https://travel-application-backend.herokuapp.com/countries/ru`;
const urlEn: string = `https://travel-application-backend.herokuapp.com/countries/en`;
const urlFr: string = `https://travel-application-backend.herokuapp.com/countries/fr`;

const getData = async (lang: string): Promise<Array<Object>> => {
  let url;

  if (lang === "ru") {
    url = urlRu;
  }

  if (lang === "en") {
    url = urlEn;
  }

  if (lang === "fr") {
    url = urlFr;
  }

  const res = await fetch(`${url}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
  }

  return await res.json();
};

export default getData;
