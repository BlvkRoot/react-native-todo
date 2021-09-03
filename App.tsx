import React from 'react';
import { StyleSheet } from 'react-native';
import { Login } from './src/pages/Login';
import { Welcome } from './src/pages/Welcome';

export default function App() {
  return (
    <>
      <Login />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});
