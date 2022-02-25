import {createModel} from '@rematch/core';
import type {RootModel} from '../';

type UserState = {
  name: string;
  email: string;
  phone: string;
  userid: string;
};

export const user = createModel<RootModel>()({
  state: {
    name: 'Guest',
    email: '',
    phone: '',
    userid: '',
  } as UserState,
  reducers: {
    setUser(state, payload: UserState) {
      return payload;
    },
  },
  effects: dispatch => ({
    addUser(payload: UserState, state) {
      dispatch.user.setUser({...state, ...payload});
    },
  }),
});
