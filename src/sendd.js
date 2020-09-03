const axios = require("axios");

export async function PostSend(datum) {
	console.log("This is sent data")
	console.log(datum)
	const response = await axios ({
	url: "https://46tah75gs5.execute-api.us-east-2.amazonaws.com/Fuzz2s2/fuzz2res",
	//url: "http://127.0.0.1:5000/",
	method: "POST",
	data: datum
	
})
console.log("This is returned data");
console.log(response.data);
window.alert(response.data)
	

	
	
	


}
// exports.postSend = PostSend;
//export default PostSend;