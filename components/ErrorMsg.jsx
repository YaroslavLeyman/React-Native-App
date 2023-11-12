import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ErrorMsg({message}) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={{fontWeight: 'bold'}}>Ошибка</Text>
      </View>
      <View style={styles.error}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    width: '100%',
    overflow: 'hidden',
  },
  head: {
    padding: 6,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#feb0a0',
    color: '#221712',
  },
  error: {    
    padding: 10,
    backgroundColor: '#ffd3cb',
  },
  text: {
    color: '#221712',
  },
});

export default ErrorMsg;
