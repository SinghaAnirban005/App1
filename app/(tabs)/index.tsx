import { View, Text, Button, StyleSheet } from 'react-native';

export default function app1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to App1 !</Text>
      <Button title="Click Me" onPress={() => alert('Button clicked!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});