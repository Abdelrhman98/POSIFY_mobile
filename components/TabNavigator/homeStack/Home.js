import * as React 		from 'react';
import { Component }	from 'react';
import {
	View,
	Text,
	Image,
	Button,
	FlatList,
	TextInput,
	StyleSheet,
	ScrollView,
	SafeAreaView,
	ImageBackground,
	TouchableOpacity }			from 'react-native';
import {Badge} 					from 'native-base';
import Entypo 					from 'react-native-vector-icons/Entypo';
import Feather 					from 'react-native-vector-icons/Feather';
import Fontisto 				from 'react-native-vector-icons/Fontisto';
import Ionicons 				from 'react-native-vector-icons/Ionicons';
import AntDesign 				from 'react-native-vector-icons/AntDesign';
import EvilIcons 				from 'react-native-vector-icons/EvilIcons';
import TypeWriter 				from 'react-native-typewriter'
import { NavigationContainer } 	from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Routes extends Component 
{
    render() 
    {
		return (
			<ImageBackground source={require("./im3.jpg")} resizeMode='cover' style={styles.image}>
				<View style={styles.topbar}>
					<View style={styles.flex1 ,styles.flexRow}>
						<Entypo name="menu" size={40} color="#ccc" />
						<Text style={styles.logoText}>
							POSIFY
						</Text>
					</View>
					<View style={styles.flex1, styles.leftEnd}>
						<Entypo name="dots-three-vertical" size={30} color="#ccc"/>
					</View>
				</View>

				<SafeAreaView style={styles.container}>
					<ScrollView style={styles.scrollView}>
						<View style={{marginTop:380, paddingLeft:10}}>
							<TypeWriter typing={1} style={styles.text}>POSIFY</TypeWriter>
							
							<TypeWriter typing={1} style={styles.text}>Capturing the beauty of your journey </TypeWriter>
						</View>
						
					</ScrollView>

					<View style={styles.botbar}>
						<View style={styles.sideLeft}>
							<Feather 	name="home" 	size={30} color="#ccc" style={styles.flex1}/>
							<EvilIcons 	name="image" 	size={40} color="#ccc" style={styles.flex1}/>
							<AntDesign	name="hearto" 	size={30} color="#ccc" style={styles.flex1}/>
						</View>
						<View style={styles.mid}>
							
						</View>
						<TouchableOpacity style={styles.loginScreenButton} onPress={() => this.props.navigation.navigate('Home2')} underlayColor='#fff'>
							<Text style={styles.loginText}>
								<AntDesign name="camera" size={30} color="#ccc" />
							</Text>
						</TouchableOpacity>

						<View style={styles.sideRight}>
							<Feather 	name="star" 	size={30} color="#ccc" style={styles.flex1} />
							<Ionicons 	name="aperture" size={30} color="#ccc" style={styles.flex1} />
							<Feather 	name="user" 	size={30} color="#ccc" style={styles.flex1} />
						</View>
					</View>
				</SafeAreaView>
			</ImageBackground>
		)
    }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
	camera:{
		backgroundColor: '#EA2A78',
	},
	image: {
		flex: 1,
		resizeMode: "cover",
	},
	sideLeft:{
		flex: 1,
		flexDirection: "row",
		//width:300
	},
	sideRight:{
		flex: 1,
		flexDirection: "row",
	},
	mid:{
		width:60,
	},
	text: {
		color: "grey",
		fontSize: 28,
		fontWeight: "bold",
		fontFamily:"Arial",
		fontStyle:"italic",
		letterSpacing:7,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: {width: -2, height: 1},
		textShadowRadius: 10,
		textDecorationStyle:"double",
		textDecorationColor:"black",
	},
	botbar:{
		flexDirection: "row",
		backgroundColor: '#191826',//#092651
		paddingLeft:30,
		paddingRight:30,
		paddingTop:15,
		marginBottom:5,
		height:70,
		borderBottomEndRadius: 120,
		borderBottomLeftRadius:120,
		//borderBottomRightRadius:70,
		//borderBottomStartRadius:220,
    	//borderTopEndRadius:150,
		borderTopLeftRadius:30,
		borderTopRightRadius:30,
		//borderTopStartRadius:50
	},
	flex1:{
		flex:1
	},
	topbar:{

		flexDirection: "row",
		backgroundColor: '#191826',//#092651
		paddingTop:10,
		//paddingRight:20,
		paddingLeft:10,
		marginBottom:5,
		height:60,
		borderBottomEndRadius: 10,
		borderBottomLeftRadius:10,
		//borderBottomRightRadius:70,
		//borderBottomStartRadius:220,
		//borderTopEndRadius:150,
		borderTopLeftRadius:30,
		borderTopRightRadius:30,
		//borderTopStartRadius:50
	},
	leftEnd:{
		marginLeft:230,
		paddingTop:8,
		paddingRight:10
	},
	loginScreenButton:{
		width:60,
		height:60,
		//margin:"auto",
		//marginRight:40,
		marginLeft:30,
		left:130,
		position:"absolute",
		//marginTop:10,
		paddingTop:10,
		paddingBottom:10,
		backgroundColor:'#ff3368',
		borderRadius:150,
		borderWidth: 1,
		borderColor: '#EA2A78'
	},
	loginText:{
		color:'#fff',
		textAlign:'center',
		paddingTop:3,
		paddingLeft : 10,
		paddingRight : 10,
		
	},
	logoText:{
		fontFamily:'Anton',
		fontSize:20,
		color:"#eee",
		paddingTop:6
	},
	flexRow:{
		flexDirection: "row",
		justifyContent: 'space-between',
	}
});

