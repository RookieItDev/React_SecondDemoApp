import { StyleSheet, Text, View ,Alert,Switch} from 'react-native'
import React , {useState} from 'react'

const SwitchDemo = () => {
  const [switchBluetooth,setSwitchBluetooth] = useState(false)
  const [switchWifi,setSwitchWifi] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.items}>
      <Text style={styles.text}>Bluetooth</Text>
      <Switch
      value={switchBluetooth}
      onValueChange={setSwitchBluetooth}
      />
      </View>
      <Text style={{marginBottom:30}}>Bluetooth : {JSON.stringify(switchBluetooth ? 'ON' : 'OFF')}</Text>
      <View style={styles.items}>
      <Text style={styles.text}>WIFI</Text>
      <Switch
      value={switchWifi}
      onValueChange={setSwitchWifi}
      />
      </View>
      <Text style={{marginBottom:30}}>WIFI : {JSON.stringify(switchWifi ? 'ON' : 'OFF')}</Text>
    </View>
  )
}

export default SwitchDemo

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:50,
    marginLeft:20,
    marginRight:20,
  },
  items:{
    flexDirection: 'row',
    marginBottom:15,
    alignItems:'center',
    justifyContent:'space-between'
  },
  text:{
    fontSize:18
  }
})