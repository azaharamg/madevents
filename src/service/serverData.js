const getData = () => {
  return fetch('https://datos.madrid.es/egob/catalogo/206974-0-agenda-eventos-culturales-100.json', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }).then(response => response.json());
};

export default getData;
