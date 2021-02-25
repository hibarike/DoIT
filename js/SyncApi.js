//--------------------SyncApi
var login = 116448;
var time = Math.floor(Date.now() / 1000);
var secret = "JalPRClXtArX6tDUkU26WvVXFSWrgRjuCbZAW0w4561Avw9i38";
var data = {
  timeout: 30,
  ops: [
    {
      conv_id: 904246,
      type: "create",
      obj: "task",
      data: {
        param: 1
      }
    }
  ]
};
var CryptoJS = require("crypto-js");
var signature = CryptoJS.enc.Hex.stringify(
  CryptoJS.SHA1(time + secret + data + secret)
);
const url =
  "https://sync-api.corezoid.com/api/1/json/" +
  login +
  "/" +
  time +
  "/" +
  signature;

// Пример отправки POST запроса:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    //redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *client
    body: data // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

postData(url, data).then((data) => {
  console.log(data); // JSON data parsed by `response.json()` call
});





