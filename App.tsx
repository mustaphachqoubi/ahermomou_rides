import React from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';

import tw from 'tailwind-react-native-classnames';

function App(): JSX.Element {

  return (
      <SafeAreaView>
      <View style={tw`w-full h-full flex justify-center items-center`}>
      <Text>Ahermomou rides</Text>
      </View>
      </SafeAreaView>
  );
}

export default App;
