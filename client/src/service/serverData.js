const getData = () => {
  return fetch('/api/events', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  }).then(response => response.json());
};

export default getData;
