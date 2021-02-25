//var CryptoJS = require("crypto-js");
//var axios = require("axios");

var login = "116353";
var time = Math.floor(Date.now() / 1000);
var secret = "7xkSDPSqg0qprb1hWGelVSojJGyJYPeFsz7gkKMX8LS2PZPyc6";
var data = JSON.stringify({
  timeout: 30,
  ops: [{ conv_id: 901908, type: "create", obj: "task", data: {"param": "1"} }]
});

var signature = CryptoJS.enc.Hex.stringify(
  CryptoJS.SHA1(time + secret + data + secret)
);
const url = `https://sync-api.corezoid.com/api/1/json/${login}/${time}/${signature}`;

console.log(url)

const axiosConfig = {
  method: 'HEAD',
		mode: 'no-cors',
		headers: {
			'Access-Control-Allow-Origin': '*',
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		withCredentials: true,
		credentials: 'same-origin',
		crossdomain: true,
}

async function makeGetRequest() {
  let res = await axios.post(url, data, axiosConfig);
  let d = res.data;
  console.log(d);
}

makeGetRequest();