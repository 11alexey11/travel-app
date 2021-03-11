const url : string = `https://travel-application-backend.herokuapp.com/countries/ru`;

const getData = async () : Promise<Array<Object>> => {
  const res = await fetch(`${url}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
  }
  
  return await res.json();
};

export default getData;