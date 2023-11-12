import React, {useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ErrorMsg from '../../components/ErrorMsg';
import {loginAsync} from '../../redux/user/user.action'; // Путь к вашему action

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginAsync(username, password));
  };

  // TouchableWithoutFeedback - это компонент, который не обрабатывает нажатия на экран
  // использование не приведет к проблемам тк используется только на одном экране
  // Keyboard.dismiss - это функция, которая скрывает клавиатуру
  // accessible={false} - это свойство, которое делает компонент невидимым

  const errorMessage = useSelector(state => state.user.error);
  const userLoading = useSelector(state => state.user.isLoading);
  //   let errorMessage = true;

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

        <TouchableOpacity
          style={
			password && username
			? {...styles.btn, backgroundColor: '#ff6900'}
			: {...styles.btn, backgroundColor: '#e1e1e1'}
		}

			disabled={password && username ? false : true}
        	onPress={handleLogin}>
          {!userLoading ? (
            <Text
              style={
                password && username
                  ? {...styles.btnText, color: '#fff'}
                  : {...styles.btnText, color: '#000'}
              }>
              Войти
            </Text>
          ) : (
            <ActivityIndicator size="small" color="#fff" />
          )}
        </TouchableOpacity>

        {errorMessage && <ErrorMsg message={errorMessage} />}
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
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  btnOk: {
    backgroundColor: '#ff6900',
  },
  btnError: {
    backgroundColor: '#e1e1e1',
  },

  btnText: {
    fontSize: 16,
  },
});

export default LoginScreen;
