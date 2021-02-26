//var CryptoJS = require("crypto-js");
//var axios = require("axios");

var login = "116448";
var time = Math.floor(Date.now() / 1000);
var secret = "JalPRClXtArX6tDUkU26WvVXFSWrgRjuCbZAW0w4561Avw9i38";
var data = JSON.stringify({
  timeout: 30,
  ops: [{ conv_id: 904246, type: "create", obj: "task", data: {"param": "1"} }]
});

var signature = CryptoJS.enc.Hex.stringify(
  CryptoJS.SHA1(time + secret + data + secret)
);
const url = `https://sync-api.corezoid.com/api/1/json/${login}/${time}/${signature}`;

console.log(url)

const axiosConfig = {
  method: 'POST',
		mode: 'cors',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			//'Access-Control-Allow-Credentials': true,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		withCredentials: false,
		credentials: 'same-origin',
		crossdomain: true,
}

async function makeGetRequest() {
  let res = await axios.post(url, data, axiosConfig);
  let d = res.data;
  console.log(d);
}

makeGetRequest();