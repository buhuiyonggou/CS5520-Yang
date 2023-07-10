import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import React, { useState } from 'react';

export default function App() {
  const appName = "CS5520";
  const [inputText, setInputText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
    // this function is called when the text input changes
  // inside it update the state variable inputText
  function handleChangeText(changedText){
    // update the state variable inputText
    // console.log(changedText);
    setInputText(changedText);
    hideModal();
  }

  function hideModal(){
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Header name={appName} />
        <Button title="Add A Goal" onPress={()=>{setModalVisible(true)}}/>
        <Input changeTextCallBack={handleChangeText} modalVisible={modalVisible}/>
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
