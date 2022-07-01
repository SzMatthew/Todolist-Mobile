import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import variables from './styles/Variables';

const Loading = () => {
  const spinValue = new Animated.Value(0);
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();
  }, []);
  

  return (
    <View style={styles.loadingWrapper}>
      <Animated.View style={{transform: [{rotate: spin}] }}>
        <AntDesign 
          name="loading1" 
          size={30} 
          color={variables.colors.letter_color} 
          style={styles.spinner} 
        />
      </Animated.View>
      <Text style={styles.text}>Loading</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: variables.colors.letter_color,
    fontSize: 25,
    marginLeft: 10
  },
  spinner: {
    
  }
});

export default Loading;