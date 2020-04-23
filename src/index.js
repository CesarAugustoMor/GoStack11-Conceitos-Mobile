import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello GoStack</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
