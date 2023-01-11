import { StyleSheet, Text, View ,TextInput ,SafeAreaView , Button, Alert} from 'react-native'
import React, { useState } from 'react'

const TextInputDemo = () => {
  // SetInputName = Method
  let  [inputName,setInputName] = React.useState('')
  let  [inputPhone,setInputPhone] = React.useState('')
  let  [inputMemo,setInputMemo] = React.useState('')
  let  [inputPassword,setInputPassword] = React.useState('')
  // check Input
  const onPressButton = () => {
    let msg = 'Save Successfully'
    if(inputName === ''){
      msg = 'Please input name'
    }else if(inputPassword === ''){
      msg = 'Please input password'
    }else if(inputPhone === ''){
      msg = 'Please input phone'
    }else if(inputMemo === ''){
      msg = 'Please input memo'
    }
    Alert.alert(
      'Alert',
      msg,
      [
        {
          text:'OK'
        }
      ]
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign:'center',paddingTop:20,fontSize:20}}>Form Register</Text>
     <Text style={styles.title}>Name : </Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputName}
        value={inputName}
      />
       <Text></Text>
      <Text style={styles.title}>Password : </Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={setInputPassword}
        value={inputPassword}
      />
      <Text></Text>
       <Text style={styles.title} >Phone Number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputPhone}
        value={inputPhone}
        // placeholder="Phone Number"
        keyboardType="numeric"
      />
      <Text></Text>
       <Text style={styles.title} >Memo:</Text>
      <TextInput
        style={styles.input,{height:100,borderWidth:1,borderRadius:18}}
        onChangeText={setInputMemo}
        textAlignVertical='top'
        value={inputMemo}
        multiline={true}
        numberOfLines={5}
        // placeholder="Phone Number"
       
      />
      <Text></Text>
      <View style={styles.button}>
      <Button
       onPress={onPressButton}
        title="Save"
       
        />
      </View>
       
    
    </SafeAreaView>
  )
}

export default TextInputDemo

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  },
  input: {
    height: 40,
    margintop: 10,
    borderWidth: 1,
    paddingtop: 10,
    borderRadius:18,
    
  },
  title:{
    margintop: 5,
    marginBottom:10,
    borderWidth: 0,
    
  },
  button:{
    width:100,
    margin:5,
  },
})