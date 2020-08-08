const axios = require('axios');
axios.get("http://127.0.0.1:5000/api/search").then(res=>{
			console.log(res.data)
		}).catch(error=>{
			alert(error)
			console.log(error)
		})