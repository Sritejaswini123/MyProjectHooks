import React from "react";
import { StyleSheet, View } from "react-native";


import UseStateScreen from "./components/UseStateScreen"; 
import UseContextScreen from "./components/UseContextScreen"; 

const App = () => {
  return (
    <View style={styles.container}>
 
      <UseStateScreen />
      <UseContextScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
