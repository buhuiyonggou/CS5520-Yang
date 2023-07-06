import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import React, { useState } from 'react';

export default function App() {
  const appName = "CS5520";
  const [inputText, setInputText] = useState("");
    // this function is called when the text input changes
  // inside it update the state variable inputText
  function handleChangeText(changedText){
    // update the state variable inputText
    // console.log(changedText);
    setInputText(changedText);
  }

  return (
    <View style={styles.container}>
      <Header name={appName} title="NEU summer course"/>
        <Input changeTextCallBack={handleChangeText}/>
        <Text>{inputText}</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
