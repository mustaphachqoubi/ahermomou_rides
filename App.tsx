import React from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';

import { Provider } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { store } from './store';
import { useSelector } from 'react-redux';

function App(): JSX.Element {

  const { test } = useSelector((state: any) => state.test)

  return (
    <Provider store={store}>
      <SafeAreaView >
      <View style={tw`w-full h-full bg-red-500 flex justify-center items-center`}>
      <Text>Ahermomou rides {test}</Text>
      </View>
      </SafeAreaView>
    </Provider>
      
  );
}

export default App;
