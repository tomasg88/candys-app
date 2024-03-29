import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './screens/Home';
import {List} from './screens/List';
import {Analyze} from './screens/Analyze';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// https://reactnavigation.org/docs/typescript/
export type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Analyze: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <RootStack.Navigator initialRouteName="Home">
        {/* Home */}
        <RootStack.Screen component={Home} name="Home" />

        {/* List */}
        <RootStack.Screen
          component={List}
          name="List"
          options={{title: 'List'}}
        />

        {/* Analyze module */}
        <RootStack.Screen
          component={Analyze}
          name="Analyze"
          options={{title: 'Analyze'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
