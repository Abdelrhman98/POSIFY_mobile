import * as React from 'react';
import { PureComponent }from 'react';
import {
	View,
	Text,
	FlatList,
	TextInput,
	ScrollView,
	StyleSheet,
	ImageBackground,
	TouchableOpacity } 			from 'react-native';
import Home 					from './components/TabNavigator/homeStack/Home';
import Camera 					from './components/TabNavigator/homeStack/Camera';
import finalShot 				from './components/TabNavigator/homeStack/finalShot';
import RespondPhotos 			from './components/TabNavigator/homeStack/respondPhotos';
import { NavigationContainer } 	from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends PureComponent {
	render() {
		return (
			<NavigationContainer screenOptions={{headerShown: false}}>
				<Stack.Navigator>
					<Stack.Screen name="Home"       component={Home}          options={{ title: 'POSIFY' ,headerShown: false}}      />
					<Stack.Screen name="Home2"      component={Camera}        options={{ animationEnabled:true ,headerShown: false}}/>
					<Stack.Screen name="Home3"      component={RespondPhotos} options={{ animationEnabled:true ,headerShown: false}}/>
					<Stack.Screen name="finalShot"  component={finalShot}     options={{ animationEnabled:true ,headerShown: false}}/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'black',
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	capture: {
		
		backgroundColor: '#fff',
		padding: 15,
		paddingHorizontal: 20,
		alignSelf: 'center',
		margin: 20,
	},
	but:{
		width:280,
		height:280,
		borderRadius: 50,
		padding: 35,
		
	}
});
export default App;