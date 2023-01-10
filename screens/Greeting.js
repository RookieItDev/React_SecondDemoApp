// rnfes
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ShowGreeting = props => {
  return (
    <View>
      <Text>
        Hello {props.name} Your age is{props.age}
      </Text>
    </View>
  );
};

const Greeting = () => {
  return (
    <View style={styles.center}>
      <Text>Hello Greeting</Text>
      {/* basic props */}
      <ShowGreeting  name="Tony" age="18" />
      <ShowGreeting name="Peter" age="18" />
      <ShowGreeting name="John" age="18" />
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  center:{
    alignItems:'center'
  }
});
