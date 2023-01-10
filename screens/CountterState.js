import { StyleSheet, Text, View , Button  } from 'react-native'
import React , {useState} from 'react'

const CountterState = () => {
  const [count, setCount] = useState(0)
  return (
    <View style={[styles.center,{top:100}]}>
       <Button onPress={() =>{setCount(count-1)}}
      title="- Counter Down"
      />
       <Text></Text>
      <Text style={{fontSize:30}}>Your Clicked {count} times</Text>
      <Text></Text>
      <Button onPress={() =>{setCount(count+1)}}
      title="+ Counter Up"
      />

    </View>
  )
}

export default CountterState

const styles = StyleSheet.create({
  center:{
    alignItems:'center',
  }
})