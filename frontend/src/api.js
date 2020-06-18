import axios from 'axios';

export default axios.create({
  baseURL: `${window.location.protocol}//${window._env_.COVID_CENTRAL_API_URL}/`
});
