
const os = require("os");

console.log("Operating System:", os.platform());
console.log("Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());
console.log("CPU Info:", os.cpus());