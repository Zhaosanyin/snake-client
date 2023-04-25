//play.js // client.js
const {IP, PORT} = require('./constants');
// console.log(IP);
// console.log(PORT);
const net = require("net");
const conn = function(){
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  })

  conn.setEncoding('utf8');
  return conn;
}

// console.log('Connecting ...');
// conn();
module.exports = conn;
