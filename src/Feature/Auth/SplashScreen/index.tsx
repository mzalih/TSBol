import * as React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {useEffect} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {RootState} from 'Store';
import {Dispatch} from 'Store';
import {useDispatch} from 'react-redux';

const SplashScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<Dispatch>();
  useEffect(() => {
    dispatch.auth.login({email: '', password: ''});
  }, [dispatch.auth]);
  return (
    <SafeAreaView>
      <View style={[isDarkMode ? styles.containerDM : styles.container]}>
        <Text style={[isDarkMode ? styles.textDM : styles.text]}>
          {authState.loading
            ? 'Loading ....'
            : 'You can update the waiting screen if you seen it'}
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 24,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },
  containerDM: {
    padding: 24,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.black,
  },
  text: {
    color: Colors.black,
  },
  textDM: {
    color: Colors.white,
  },
});
export default SplashScreen;
