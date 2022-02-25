import * as React from 'react';
import {useSelector} from 'react-redux';
import SplashScreen from '../Feature/Auth/SplashScreen';
import {RootState} from '../model/Store';

import HomeNavigator from './Home'
import AuthNavigator from './Auth'

const Navigator = () => {
  const authState = useSelector((state: RootState) => state.auth);

  return authState.loading ? (
    <SplashScreen />
  ) : authState.loggedIn ? (
    <HomeNavigator />
  ) : (
    <AuthNavigator />
  );
};
export default Navigator;
