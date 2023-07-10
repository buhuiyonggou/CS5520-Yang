import { View, TextInput, Button, Modal, Image, StyleSheet} from 'react-native'
import React, {useState} from 'react';

const Input = ({changeTextCallBack, modalVisible}) => {
  const [text, setText] = useState('');
  
  function storeText(changedText){
    // console.log(changedText);
    setText(changedText);
  }

  return (
    <Modal visible={modalVisible} animationType='slide'>
      <View style={styles.container}>
        <Image source={{uri:'https://img.freepik.com/premium-photo/anime-girl-watching-sunset-3d-illustration_717906-1415.jpg?w=2000'}} style={styles.image}/>
        <Image source={require("../assets/pic.png")} style={styles.image}/>
        <TextInput style={styles.input} onChangeText={storeText} value={text}/>
        <Button title='Confirm' onPress={()=> {changeTextCallBack(text)}}/>
       <Button title="Cancel" onPress={()=>{setText(""); changeTextCallBack("") }}/>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    width: 200,
    height: 40,
  },
  image: {
    width: 100,
    height: 100,
  }
});

export default Input