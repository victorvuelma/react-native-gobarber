import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hey!</Text>
      </SafeAreaView>
    </>
  );
}
