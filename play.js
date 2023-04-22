//play.js // client.js
const conn = require('./client.js');
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



const connection = conn();

connection.on("connect", ()=>{
  console.log("Successfully connected to game server");
});
connection.on("connect", ()=>{
  connection.write("Name: ZSY");
  
});

connection.on("connect", ()=>{
  setTimeout(() => {
    connection.write("Move: up");
  }, 50);
});
const intervalId = setInterval(()=>{
  connection.write("Move: up");
}, 500);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


const handleUserInput = function() {
  // code added;
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};

process.stdin.on("data", handleUserInput);