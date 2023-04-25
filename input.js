// const setupInput = require("./play.js");

//play.js // client.js
const connF = require('./client.js');
const net = require("net");
const { connect } = require('http2');




 const conn = connF();

conn.on("connect", ()=>{
  console.log("Successfully connected to game server");
});
conn.on("connect", ()=>{
  conn.write("Name: ZSY");
  
 });

// conn.on("connect", ()=>{
//   setTimeout(() => {
//     conn.write("Move: up");
//   }, 50);
// });
// const intervalId = setInterval(()=>{
//   conne.write("Move: up");
// }, 500);


// setTimeout(() => {
//   clearInterval(intervalId);
// }, 2000);
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.setMaxListeners(20);
  return stdin;
};


const handleUserInput = function(stdin, conn) {
  // code added;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      conn.write("Move: up");
      // console.log("Move: up");
    } else if (key === 'a') {
      conn.write("Move: left");
      // console.log("Move: left");
    } else if (key === 's') {
      conn.write("Move: down");
      // console.log("Move: down");
    } else if (key === 'd') {
      conn.write("Move: right");
      // console.log("Move: right");
    }else if(key === 'y'){
      conn.write("Say: hello, I'm playing snake!");
    }
  });
};

const stdin = setupInput(conn);
// stdin.on("data", handleUserInput);
handleUserInput(stdin, conn);

 module.exports = setupInput;
