import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
  return (
    //If we want to override a style prop from a self built component, make an array and style
    // on the right will override the style on the left **
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };