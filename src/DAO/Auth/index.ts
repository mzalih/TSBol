import {api, catcher} from 'Api';
import server from 'Server';

export async function login(payload: {email: string; password: string}) {
  let mApi = await api();
  let path = server.routes.auth;
  return mApi
    .post(path, payload)
    .then((res: {data: any}) => res.data)
    .catch(catcher);
}
