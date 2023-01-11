import { StyleSheet, Text, View, Alert , Button } from 'react-native'
import Alertf from '../functions/AlertComponent'
import React from 'react'
const showAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );
const Alertcomponent = () => {

  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,textAlign:'center',paddingTop:40}}>Alertcomponent</Text>
      <Text></Text>
      <Button title="Show alert" onPress={showAlert}/>
    </View>
  )
}

export default Alertcomponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})