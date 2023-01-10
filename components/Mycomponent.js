// rnfe
// ถ้าไม่ Auto import ให้ลงส่วนเสริม Auto import  auto import es7
import {View, Text , StyleSheet} from 'react-native';
import React from 'react';
// เรียก Css มาจาก Folder themes
import  styles from '../themes/Style'

const Mycomponent = () => {
  // Css แบบแยกเขียน
  const textSubject = {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'lime',
    backgroundColor: 'black',
  };
  // const textPlain = {
  //   borderWidth: 2,
  //   borderRadius: 50,
  //   borderColor: 'red',
  //   padding: 10,
  //   marginTop: 10,
  //   marginBottom: 10,
  //   textAlign:'center',
  // };
  // End
  return (
    <View style={styles.container}>
      <Text >This is my components</Text>
      <Text >This is my React Native</Text>
      <Text style={[styles.textTitle,styles.textPlain,{marginTop:40}]}>This is my React Native</Text>
    </View>
  );
};

export default Mycomponent;
// const styles = StyleSheet.create ({
//   container:{
//     backgroundColor: 'grey',
//     padding:10,
//     paddingTop:1, //Full Screen
//   },
//   textTitle:{
//     color:'lime',
//     fontSize:20,
//     fontWeight: 'bold',
//     marginTop:15,
//     marginBottom:15,
//   },
// });

