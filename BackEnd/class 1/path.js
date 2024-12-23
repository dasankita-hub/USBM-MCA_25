const path = require("path");
console.log(path);

const rootDir = path.resolve(__dirname, "..");
console.log(rootDir);  // C:\USBM-MCA_25\BackEnd

// adding path
console.log(path.join("class-1", "path.js"));
// console.log(path.join(rootdir,'abcde'))
