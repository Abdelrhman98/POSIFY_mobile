import React, { PureComponent }from 'react';
import {StyleSheet,
View,
Text,
TextInput,
ScrollView,
FlatList,
TouchableOpacity,
Image,PermissionsAndroid, Platform
} from 'react-native';
import Feather 			from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-material-ui';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";

import Entypo 			from 'react-native-vector-icons/Entypo';
import AntDesign 			from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import RNFetchBlob from 'rn-fetch-blob';
import axios from 'axios';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

axios.defaults.timeout = 10000
import {hostName as host} from '../../../app.json';

class Camera extends PureComponent 
{
	constructor(props) 
	{
		
		super(props);
		this.state = 
		{
			imgPath: null,
			rotateIcon		: 'rotate-ccw',
			rotateStateObj	: RNCamera.Constants.Type.back,
			soundIcon		: 'sound',
			soundObj		: true,
			flashIcon		: 'flash-off',
			flashObj		: RNCamera.Constants.FlashMode.off,
			Processing:false
			//images:[]
		};
	}
	
	suggestPhoto(){
		var formData 	= new FormData();
		const tar 		= this.state.imgPath.uri;
		formData.append("file",{ uri: tar, name: tar, type: 'image/jpeg' });
		const config 	= {
			headers: {
				"Content-Type": "multipart/form-data"
			}
        };
		//axios.get('https://e83b0039e16c.ngrok.io/test')
		axios.post(`${host}search`, formData, config).then( (response) => { 
            var result = response.data; 
			this.props.navigation.navigate('Home3',{data: result})
            //console.log(result); 
        }, 
        (error) => { 
            alert(error);
            console.log(error); 
        });
	}

	
	


    renderSelectedImage() 
	{
		if (this.state.imgPath != null) 
		{
			return(
				<Image
					source={this.state.imgPath}
					style={[{ position: 'absolute',right:10, top:50,zIndex:999, borderRadius: 12, width: 150, height: 250, resizeMode: 'stretch' }]}
				/>
			)
		}
	}
	
	setoo(){
		setTimeout(this.renderSelectedImage(),1000)
	}
	render() 
	{
		return(
			<View style={styles.container}>
				{this.renderSelectedImage()}
				<View style={styles.topButtons}>
					<Feather 	name={this.state.rotateIcon} 	size={35} color="#ccc" onPress={()=>{
							if(this.state.rotateIcon == 'rotate-ccw'){
							this.setState({
								rotateIcon: 'rotate-cw',
								rotateStateObj:RNCamera.Constants.Type.front,
							})}else{
								this.setState({
									rotateIcon: 'rotate-ccw',
									rotateStateObj:RNCamera.Constants.Type.back,
								})
							}}} 	style={styles.icons} />
					<Entypo name={this.state.soundIcon} 	size={35} color="#ccc"  onPress={()=>{
							if(this.state.soundIcon == 'sound'){
							this.setState({
								soundIcon: 'sound-mute',
								soundObj:false,
							})}else{
								this.setState({
								soundIcon: 'sound',
								soundObj:true,
								})
							}}}		style={styles.icons}/>
					<Ionicons name={this.state.flashIcon} 	size={35} color="#ccc" 
						onPress={()=>{
							if(this.state.flashIcon == 'flash-off'){
							this.setState({
								flashIcon: 'flash',
								flashObj:RNCamera.Constants.FlashMode.on,
							})}else{
								this.setState({
								flashIcon: 'flash-off',
								flashObj:RNCamera.Constants.FlashMode.off,
								})
							}}} 		style={styles.icons}/>
				</View>
				<RNCamera
					ref				={(ref) => {this.camera = ref;}}
					style			={styles.preview}
					type			={this.state.rotateStateObj}
					flashMode		={this.state.flashObj}
					captureAudio	={this.state.soundObj}
					androidCameraPermissionOptions=
					{{
						title: 'Permission to use camera',
						message: 'We need your permission to use your camera',
						buttonPositive: 'Ok',
						buttonNegative: 'Cancel',
					}}
				/>
				<View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' ,marginTop:10,marginBottom:10}}>
					<View style={styles.cap}>
						<Feather name="aperture" onPress={this.takePicture.bind(this)} size={60} color="#fff"/>
					</View>
				</View>
			</View>
		);
	}

	takePicture = async () => 
	{
		if (this.camera) 
		{
			const options = { quality: 0.5, base64: true }
			const data = await this.camera.takePictureAsync(options)
			this.setState
			({
				imgPath: { uri: data.uri },
			});
			console.log(data.uri)
			this.suggestPhoto()
			
		};////////////
	}
	
}
const styles = StyleSheet.create
({
	container: 
	{
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'black',
	},
	preview: 
	{
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	capture: 
	{
		backgroundColor: '#fff',
		padding: 15,
		paddingHorizontal: 20,
		alignSelf: 'center',
		margin: 20,
	},
	but:
	{
		width:280,
		height:280,
		borderRadius: 50,
		padding: 35,
	},
	topButtons:{
		height:50,
		flexDirection: 'row',
		marginLeft:20
	},
	icons:{
		paddingTop:8,
		paddingRight:15
	},
	cap:{
		width:67,
		height:67,
		borderRadius: 50,
		borderWidth:3,
		borderColor:'#fff',
		
	}
});
export default Camera;
///nigrok http 5000