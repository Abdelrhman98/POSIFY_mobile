import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	Platform,
	StatusBar,
	StyleSheet,
	ScrollView,
	Dimensions,
	BackHandler,
	SafeAreaView,
	TouchableOpacity,
	KeyboardAvoidingView,
} 						from 'react-native';
import Entypo 			from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('window');

class RespondPhotos extends Component {
    photosArray = [];
    constructor( props ) {
        super  ( props );
        this.state = {
            selectedPhoto: null,
        };
        this.photosArray = this.props.route.params.data;
    }

    renderHeader() 
	{
    return (
        <View
        style={[
            styles.flex,
            styles.row,
            styles.shadow,
            {
                width: width,
                height: 65,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#2c3e50',
                zIndex: 1,
            },
        ]}>
        
        <TouchableOpacity
            style={{
                height: '100%',
                aspectRatio: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
			onPress={() => this.handleBackButtonClick()}></TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF' }}>
            {'Recommended Photos'}
        </Text>
        <View
            style={{
            height: '100%',
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center',
		}}>
		<View style={{ width:40, height:40,borderWidth:3,borderRadius:50,borderColor:'#fff' ,padding:2}}>
			<Entypo name='controller-next' size={30} color={'#fff'} onPress={()=>{
				if(this.state.selectedPhoto)
					this.props.navigation.navigate('finalShot',{selectedImg: this.photosArray[this.state.selectedPhoto]})
				else
					alert('please select photo')
			}}/>
			</View>
		</View>
	</View>
	);
}

    render() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#003f43' }}>
            <StatusBar brackgroundColor="#000" barStyle="light-content" />
                <View style={{ flex: 1, backgroundColor: '#FFF', width }}>
                    {this.renderHeader()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, paddingVertical: 8 }}>
                    <View
                        style={[
                            styles.row,{ flex: 1, justifyContent: 'flex-start', flexWrap: 'wrap' },
					]}>
                    {this.photosArray.map((item, index) => {
                return (
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ selectedPhoto: index });
                        console.log(index);
                    }}
                    key={ index.toString() }
                    style={{
                        width: width / 3 - 10,
                        height: width / 3 - 10,
                        backgroundColor: '#CCC',
                        margin: 5,
                    }}>
                    <Image
                        source={{
                            uri: item,
                        }}
                        resizeMethod="resize"
                        style={{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: 'stretch',
                        }}
                    />
                </TouchableOpacity>
                );
                })}
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
    );
    }
}

// redux
export default RespondPhotos;

const styles = StyleSheet.create({
	flex: {
		flex: 0,
	},
	row: {
		flexDirection: 'row',
	},
	rowReversed: {
		flexDirection: 'row-reverse',
	},
	column: {
		flexDirection: 'column',
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
		width: 0,
		height: 5,
		},
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputFields: {
		borderBottomColor: '#fff',
		width: width - 36 * 3,
		borderRadius: 12,
		backgroundColor: '#FFF',
		paddingVertical: 4,
		paddingHorizontal: 18,
		textAlign: 'center',
	},
	loginButton: {
		backgroundColor: '#003f43',
		width: width - 36 * 5,
		borderRadius: 27,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20,
		marginTop: 35,
		marginBottom: 15,
	},
	registerButton: {
		backgroundColor: '#eacf43',
		width: width - 36 * 3,
		borderRadius: 27,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20,
		marginTop: 35,
		marginBottom: 25,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
	registerButtonText: {
		color: '#003f43',
		fontSize: 16,
		fontWeight: 'bold',
	},
	image: {
		width: width * 0.6,
		height: width * 0.3,
		resizeMode: 'contain',
	},
});
