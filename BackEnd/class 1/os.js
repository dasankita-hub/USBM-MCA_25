const os=require("os");
console.log(os);
console.log(os.homedir()); //C:\Users\ankit
console.log(os.platform());//win32
console.log(os.hostname());//Lenovo


console.log(os.userInfo().username);//ankit



const byte = os.totalmem();

const gb = byte / (1024 * 1024 * 1024);

console.log(`Total Memory: ${gb.toFixed(2)} GB`);