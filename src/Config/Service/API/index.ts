import axios from 'axios';
// import Config from 'react-native-config';

const appSpecificHeader = async () => ({
  'Content-Type': 'application/json',
  Authorization: `${
    (await accessToken()) ? 'Bearer' + (await accessToken()) : ''
  }`,
});

async function accessToken() {
  return 'Not available';
}

export async function api() {
  let options = {
    // baseURl: Config.API_URL,
    baseURl: '',
    headers: await appSpecificHeader(),
  };
  return axios.create(options);
}

export async function catcher(e: any) {
  return e.response && e.response.data
    ? {message: e.response.data}
    : {message: 'Network failed'};
}
