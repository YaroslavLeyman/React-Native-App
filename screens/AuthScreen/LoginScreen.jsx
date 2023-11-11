import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginAsync} from '../../redux/user/user.action'; // Путь к вашему action

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginAsync(username, password));
  };

  // TouchableWithoutFeedback - это компонент, который не обрабатывает нажатия на экран
  // Keyboard.dismiss - это функция, которая скрывает клавиатуру
  // accessible={false} - это свойство, которое делает компонент невидимым
  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Авторизация</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity  style={styles.btn} onPress={handleLogin} >
          <Text style={styles.btnText}>Войти</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    paddingBottom: 10,
    paddingTop: 10,   
    paddingLeft: 16,  
    paddingRight: 16,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    borderRadius: 6,
  },
  btn: {
    width: '100%',
    backgroundColor: '#ff6900',
    paddingBottom: 10,
    paddingTop: 10,   
    paddingLeft: 16,  
    paddingRight: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  }
});

export default LoginScreen;
