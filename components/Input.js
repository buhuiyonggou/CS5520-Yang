import { View, TextInput, StyleSheet} from 'react-native'
import React from 'react';

const Input = ({changeTextCallBack}) => {

  return (
    <View>
    <TextInput style={styles.input}
    onChangeText={changeTextCallBack}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    width: 200,
    height: 40,
  }
});

export default Input