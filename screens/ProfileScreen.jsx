import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/user/user.action';

const ProfileScreen = () => {
  
	const dispatch = useDispatch();

	const user = useSelector(state => state.user.userInfo);

	const handleLogout = () => {
		dispatch(logout());
	}

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: user.image}} style={styles.image} />
      <Text style={styles.name}>
        {user.firstName} {user.lastName}
      </Text>

		<View style={styles.infoContainer}>
			<Text style={styles.infoTitle}>Основная информация:</Text>
			<Text style={styles.infoText}>Username: {user.username}</Text>
			<Text style={styles.infoText}>Email: {user.email}</Text>
			<Text style={styles.infoText}>Phone: {user.phone}</Text>
			<Text style={styles.infoText}>Gender: {user.gender}</Text>
		</View>

		<View style={styles.infoContainer}>
			<Text style={styles.infoTitle}>Адрес:</Text>
			<Text style={styles.infoText}>{user.address.address}</Text>
			<Text style={styles.infoText}>
			{user.address.city}, {user.address.state} {user.address.postalCode}
			</Text>
		</View>


		<TouchableOpacity style={styles.btn} onPress={handleLogout}>
			<Text style={styles.btnText}>Выйти</Text>
		</TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    margin: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    padding: 10,
	borderColor: 'gray',
	borderBottomWidth: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    marginTop: 5,
  },
  btn: {
	backgroundColor: '#ff6900',
	padding: 10,
	borderRadius: 5,
	alignItems: 'center',
	marginBottom: 10,
  },
  btnText: {
	color: '#fff',
	fontSize: 16,
	fontWeight: 'bold',
  }
});

export default ProfileScreen;
