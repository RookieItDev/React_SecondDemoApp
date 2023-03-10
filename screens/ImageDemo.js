import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ImageDemo = () => {
  return (
    <View>
      <Text style={{marginTop: 30, textAlign: 'center'}}>IMAGE HERO ROV</Text>
      <View style={styles.container}>
        <Image style={styles.img}
         resizeMode={'cover'}
        //  'cover', 'contain', 'stretch' , 'center'
        source={require('../assets/images/Aoi.jpeg')} />  
        <Image style={styles.img} resizeMode={'cover'} source={require('../assets/images/but.jpeg')} />
        <Image style={styles.img} resizeMode={'cover'} source={require('../assets/images/Raview.jpg')} />
        <Image style={styles.img} resizeMode={'cover'} source={require('../assets/images/Ruie.jpg')} />
        <Image style={styles.img} resizeMode={'cover'} source={require('../assets/images/Tel.jpg')} />
        <Image style={styles.img} resizeMode={'cover'} source={require('../assets/images/Thorne.jpg')} />
        <Image style={styles.img} resizeMode={'cover'} source={require('../assets/images/Violet.png')} />
        <Image style={styles.img} resizeMode={'cover'} source={{uri:'https://cdn.oneesports.co.th/cdn-data/sites/3/2022/09/teeri-rov.jpeg'}} />
      </View>
    </View>
  );
};

export default ImageDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom:30,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'space-evenly'

  },
  items: {
    textAlign: 'center',
  },
  img:{
    width:140,
    height:140,
    marginBottom:10,
    // borderWidth:1,
    // borderColor:'red'
  }
});
