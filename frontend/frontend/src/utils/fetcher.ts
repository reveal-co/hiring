import axios from 'axios';
const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT;
export default async function fetcher (path: string, params = {}) {
  const url = new URL(`${endpoint}${path}`);
  return axios.get(url.href, { params: params }).then(res => res.data);
};
