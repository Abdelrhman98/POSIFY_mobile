constructor(props) 
	{
		super(props);
		this.state = 
		{
			imgPath: null,
		};
	}
    renderSelectedImage() 
	{
		if (this.state.imgPath != null) 
		{
			return 
			(
				<Image
					source={this.state.imgPath}
					style={[{ flex: 1, borderRadius: 12, width: 300, height: 300, resizeMode: 'stretch' }]}
				/>
			
			)
		} 
		else 
		{
			return 
			(
				<TouchableOpacity onPress={() => this.pickImageFromPhone()} activeOpacity={0.7} style={[styles.shadow, { backgroundColor: '#E9E9E9', aspectRatio: 1, padding: 22, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }]}>
					<Text style={{ textAlign: 'center' }} >{"أضف صورتك الشخصيه"}</Text>
				</TouchableOpacity>
			)
		}
	}