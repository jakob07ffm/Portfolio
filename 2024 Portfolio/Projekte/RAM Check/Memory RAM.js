let os = require("os");
let Bytes = os.freemem();    // nicht Richtig!!! sind RAM
let kBytes = Bytes/1000;
let mBytes = kBytes/1000;
let gBytes = mBytes/1000;
let gBytesRounded = Math.round(gBytes);
let totalmemgb = os.totalmem()/1000/1000/1000;
let totalmemrounded = Math.round(totalmemgb);


console.log("Free Memory " + gBytesRounded + (" GB RAM"));
console.log("Total Memory " + totalmemrounded + (" GB RAM"));