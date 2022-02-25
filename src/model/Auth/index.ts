import {createModel} from '@rematch/core';
import type {RootModel} from '../';
import * as AuthDao from 'DAO/Auth';

type AuthState = {
  loading: boolean;
  loggedIn: boolean;
};

export const auth = createModel<RootModel>()({
  state: {
    loading: true,
    loggedIn: false,
  } as AuthState,
  reducers: {
    login(state, status: boolean) {
      return {loading: false, loggedIn: status} as AuthState;
    },
  },
  effects: dispatch => ({
    async login(payload: AuthState) {
      try {
        await AuthDao.login(payload);
        dispatch.auth.login(true);
      } catch (e) {
        console.log(e);
      }
    },
  }),
});
