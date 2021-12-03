const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT;

export default async function fetcher (url: string) {
  const fullUrl = new URL(`${endpoint}${url}`)
  return fetch(fullUrl.href).then((response) => response.json());
};
