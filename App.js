// rnfe
// ถ้าไม่ Auto import ให้ลงส่วนเสริม Auto import  auto import es7
import React from 'react'
// {} เป็นการ import components
import {View, Text , StyleSheet} from 'react-native'
import Mycomponent from './components/Mycomponent'
import styles from './themes/Style'

// สร้างชื่อ Function ให้เป็นชื่อเดียวกับชื่อไฟล์ 
const App = () => {
  // => airo function 
// () เป็นไม่รับ parameter ใดๆเข้ามา
return <View>
  {/*Mycomponent Call มาจาก Mycomponent.js */}
  <Mycomponent/>
  <Text style={styles.boxr}>Hello World1</Text>
  <Text style={styles.boxg}>Hello World2</Text>
  </View>
}
export default App