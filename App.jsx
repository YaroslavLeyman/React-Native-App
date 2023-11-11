/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import { AuthNavigator, MainNavigator } from './navigation';

// function Section({children, title}) {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App() {
 
  const checkUser = useSelector(state => state.user.userInfo);
//   const checkUser = false

  return (
	<NavigationContainer>

			{checkUser  ? <MainNavigator /> : <AuthNavigator />}

	</NavigationContainer>

  );
}

const styles = StyleSheet.create({
  
});

export default App;
