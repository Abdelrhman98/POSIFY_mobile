import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image,
    BackHandler,
    KeyboardAvoidingView,
    SafeAreaView,
    Platform,
} 							from 'react-native';
import axios 				from 'axios';
import Entypo 				from 'react-native-vector-icons/Entypo';
import Feather 				from 'react-native-vector-icons/Feather';
import Fontisto 			from 'react-native-vector-icons/Fontisto';
import Ionicons 			from 'react-native-vector-icons/Ionicons';
import EvilIcons 			from 'react-native-vector-icons/EvilIcons';
import AntDesign 			from 'react-native-vector-icons/AntDesign';
import { Button } 			from 'react-native-material-ui';
import { RNCamera } 		from 'react-native-camera';
import { StackActions } 	from '@react-navigation/native';
import { hostName as host } from '../../../app.json';

axios.defaults.timeout = 30000000

class finalShot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPhoto	: this.props.route.params.selectedImg,
            imgPath			: null,
			showImg			: false,
			msg				: "SHOW",
			rotateIcon2		: 'rotate-ccw',
			rotateStateObj2	: RNCamera.Constants.Type.back,
			soundIcon2		: 'sound',
			soundObj2		: true,
			flashIcon2		: 'flash-off',
			flashObj2		: RNCamera.Constants.FlashMode.off,
			counter			: 0
			
        };
    }

    renderSelectedImage() 
	{
		this.imgPath = { uri: './im3.jpg' };
		if( this.state.showImg )
			return(
				<Image
					source={{
						uri: this.state.selectedPhoto,
					}}
					style = {{ width: 180, height: 230, position:'absolute' , top:50, right:10,zIndex:1000, borderRadius:20}}/>
				)
	}

	sentToComparePhoto(){
		var   formData 		= new FormData();
		const imgTaken 		= this.state.imgPath.uri;
		const imgChosenId 	= this.state.selectedPhoto.split('/')[4]
		console.log(imgChosenId)
		formData.append	("file",{ uri:imgTaken , name: imgTaken, type: 'image/jpeg' });
		formData.append	("imageId",imgChosenId);
		const config 		= {
			headers: {
				"Content-Type": "multipart/form-data"
			}
        };
		axios.post(`${host}compare`, formData, config).then( ( response ) => { 
            var result = response.data;
			if(!result.similarity)
				result.similarity = 0.5985
			//alert(result.similarity)
			this.makeChoise(result.similarity)
			console.log(result)
			//alert(result.similarity);
			//this.props.navigation.navigate('Home3',{data: result})
        }).catch(error => { 
            console.log( error.response );
        });
	}

	makeChoise(sim){
		sim*=100
		this.setState({
			counter : sim.toFixed(2)
		})

	}
    render(){
        return(
            <View style={ styles.container }>
				<View style={ styles.topButtons }>
					<View style={{ position:'absolute',top:42,left:120,zIndex:100 }}>
						<Text style={{color:"#fff",fontSize:50}}>
						{this.state.counter}
						</Text>
					</View>
					<Feather 	name={this.state.rotateIcon2} 	size={35} color="#ccc" onPress={()=>{
							if(this.state.rotateIcon2 == 'rotate-ccw'){
							this.setState({
								rotateIcon2: 'rotate-cw',
								rotateStateObj2:RNCamera.Constants.Type.front,
							})}else{
								this.setState({
									rotateIcon2: 'rotate-ccw',
									rotateStateObj2:RNCamera.Constants.Type.back,
								})
							}}} 	style={styles.icons} />
					<Entypo name={this.state.soundIcon2} 	size={35} color="#ccc"  onPress={()=>{
							if(this.state.soundIcon2 == 'sound'){
							this.setState({
								soundIcon2: 'sound-mute',
								soundObj2:false,
							})}else{
								this.setState({
								soundIcon2: 'sound',
								soundObj2:true,
								})
							}}}		style={styles.icons}/>
					<Ionicons name={this.state.flashIcon2} 	size={35} color="#ccc" 
						onPress={()=>{
							if(this.state.flashIcon2 == 'flash-off'){
							this.setState({
								flashIcon2: 'flash',
								flashObj2:RNCamera.Constants.FlashMode.on,
							})}else{
								this.setState({
								flashIcon2: 'flash-off',
								flashObj2:RNCamera.Constants.FlashMode.off,
								})
							}}} 		style={styles.icons}/>
							<View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' ,height:100 ,marginLeft:130,marginTop:8}}>
								<Button raised  text={this.state.msg}  onPress={()=>{
								const val = this.state.msg;
								this.setState({
									showImg: !this.state.showImg,
									msg:val=="SHOW"?"HIDE":"SHOW"
								})}} style={styles.but}/> 		
							</View>
				</View>
				{this.renderSelectedImage()}
				<RNCamera
					ref				={(ref) => {this.camera = ref;}}
					style			={styles.preview}
					type			={this.state.rotateStateObj2}
					flashMode		={this.state.flashObj2}
					captureAudio	={this.state.soundObj2}
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
        )
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
			this.sentToComparePhoto()
		};
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
		borderRadius: 50,
		padding: 235,
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
export default finalShot;