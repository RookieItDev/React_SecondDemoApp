import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'


const RowsItems = () => {
  const items = [
    'One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'
  ]
  return (
    <ScrollView  style={{flex:1}}>
    <View style={[styles.container]}>
     {
       items.map((item, i)=>{
         return (
           <View style={[styles.items]} key={i}>
             <Text >{item}</Text>
           </View>
         )
       })
     }
    </View>
    </ScrollView>
  )
}

export default RowsItems

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    flexWrap:'wrap',
    padding:22,
   
  },
  items:{
    justifyContent:'center',
    backgroundColor:'lightgray',
    height:100,
    width:100,
    padding:10,
    margin:10,
  }
})