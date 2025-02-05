import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import HelloWorld from '@singhaanirban/react-native-hello';

const App = () => {
  return (
    <View>
      <HelloWorld 
        containerStyle={{ backgroundColor: 'blue' }}
        textStyle={{ fontSize: 22, color: 'yellow' }}
      />
    </View>
  );
};

export default App;
