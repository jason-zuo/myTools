import axios from '../../server/axios';

export const fetchHomeList = (newUser) => {
  return axios('GET', '/api/list', {})
    .then((response) => {return response})
    .catch((err) => console.log('updateHomeList failed', err));
};
