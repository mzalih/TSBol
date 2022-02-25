import {Models} from '@rematch/core';
import {user} from './User';
import {auth} from './Auth';
export interface RootModel extends Models<RootModel> {
  user: typeof user;
  auth: typeof auth;
}
export const models: RootModel = {user, auth};
