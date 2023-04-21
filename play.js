//play.js // client.js
const conn = require ('./client.js')
const net = require("net");
// const conn = function(){
//   const conn = net.createConnection({
//     host: '10.0.2.15',
//     port: '50541',
//   })

//   conn.setEncoding('utf8');
//   return conn;
// }

// console.log('Connecting ...');
//  conn();

// conn.on("data", (data)=>{
//   console.log("Server says: ", data);
// });

const connection = conn();

connection.on("connect", ()=>{
  console.log("Successfully connected to game server");
})
connection.on("connect", ()=>{
  connection.write("Name: ZSY");
})