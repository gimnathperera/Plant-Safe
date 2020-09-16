import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './store/reducers/index';
import useLinking from './navigation/useLinking';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import PredictionScreen from './screens/PredictionScreen';
// import InitialScreen from './screens/InitialScreen';
import FormLogin from './components/forms/FormLogin';
import FormRegister from './components/forms/FormRegister';
import InitialScreen from './screens/InitialScreen';
import DetailedScreen from './screens/DiseaseDetailedScreen';

const Stack = createStackNavigator();

const store = createStore(reducers, applyMiddleware(thunk));

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          spacemono: require('./assets/fonts/spacemonoregular.ttf'),
          opensansbold: require('./assets/fonts/opensansbold.ttf'),
          comicneuebold: require('./assets/fonts/comicneuebold.ttf'),
          comicneueregular: require('./assets/fonts/comicneueregular.ttf'),
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}

          <NavigationContainer
            ref={containerRef}
            initialState={initialNavigationState}
          >
            <Stack.Navigator>
              <Stack.Screen
                name='InitialScreen'
                component={InitialScreen}
                options={{
                  headerTintColor: '#1D446F',
                  title: '',
                  headerTransparent: 'true'
                }}
              />

              <Stack.Screen
                name='LoginScreen'
                component={FormLogin}
                options={{
                  headerTintColor: '#1D446F',
                  title: '',
                  headerTransparent: 'true',
                  headerLeft: null
                }}
              />

              <Stack.Screen
                name='RegisterScreen'
                component={FormRegister}
                options={{
                  headerTintColor: 'white',
                  title: '',
                  headerTransparent: 'true'
                }}
              />

              <Stack.Screen
                name='Home'
                component={BottomTabNavigator}
                options={{
                  headerTintColor: '#1D446F',
                  title: '',
                  headerTransparent: 'true',
                  headerLeft: null
                }}
              />

              <Stack.Screen
                name='PredictionScreen'
                component={PredictionScreen}
                options={{
                  headerTintColor: '#1A8766',
                  title: '',
                  headerTransparent: 'true'
                }}
              />
              <Stack.Screen
                name='DetailedScreen'
                component={DetailedScreen}
                options={{
                  headerTintColor: 'white',
                  title: '',
                  headerTransparent: 'true'
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
