 suggestPhoto(){
    var queryObj = { name: 'Chitrank' }; 
    axios.get('https://ba41bfa4803d.ngrok.io/search').then( 
        (response) => { 
            var result = response.data; 
            console.log(result); 
        }, 
        (error) => { 
            alert(error);
            console.log(error); 
        } 
    ); 
		/*axios.get("https://rocky-cliffs-25615.herokuapp.com/api/showCarModel").then(data=>{
			console.log(data)
		})*/
		

	}