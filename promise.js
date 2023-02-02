// const { readFile, access, writeFile, constants } = require("fs/promises");
// const { readFile } = require("fs");

// const fileName = "message.txt";
// const oldName = "Rajabi";
// const newName = "Goodarzi";

// stage1: pending
// stage2-1: fulfilled (resolve)
// stage2-2: rejected

// promise hell
// function main() {
//   access(fileName, constants.R_OK)
//     .then(() => {
//       console.log("I can access this file.");
//       readFile(fileName, "utf8")
//         .then((data) => {
//           const newMessage = data.replace(oldName, newName);
//           writeFile(fileName, newMessage, "utf8")
//             .then(() => {
//               console.log("NewMessage");
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// standard promise
// function main() {
//   access(fileName, constants.R_OK)
//     .then(() => {
//       console.log("I can access this file.");
//       return readFile(fileName, "utf8");
//     })
//     .then((data) => {
//       const newMessage = data.replace(oldName, newName);
//       return writeFile(fileName, newMessage, "utf8");
//     })
//     .then(() => {
//       console.log("NewMessage");
//     })
//     .catch((err) => {
//       console.log(err.errno);
//     });
// }

// promisify (way 1)
// const greetingPromise = (name) => {
//   return new Promise((resolve, reject) => {
//     if (name.toLowerCase() === "ali") {
//       reject("I can't accept Ali");
//     }
//     resolve(`Hello ${name}`);
//   });
// };
// const setTimeoutPromise = (timeout) => {
//   return new Promise((resolve, reject) => {
//     const timeOutNumber = Number(timeout);
//     if (isNaN(timeOutNumber)) return reject("Invalid timeout.");
//     setTimeout(() => {
//       resolve();
//     }, timeOutNumber);
//   });
// };
// const readFilePromise = (path, options) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, options, (err, data) => {
//       if (!!err) return reject(err);
//       resolve(data);
//     });
//   });
// };

// function main() {
//   greetingPromise("Ali")
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   setTimeoutPromise(1000)
//     .then(() => {
//       console.log("OK");
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   readFilePromise(fileName, "utf8")
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// async await
// const changeFileData = async () => {
//   await access(fileName, constants.R_OK);
//   const data = await readFile(fileName, "utf8");
//   if (data.includes(newName)) throw { message: "already changed!" };
//   const newMessage = data.replace(oldName, newName);
//   await writeFile(fileName, newMessage, "utf8");
//   return newMessage;
// };
// const changeFileData = async () => {
//   try {
//     await access(fileName, constants.R_OK);
//     const data = await readFile(fileName, "utf8");
//     if (data.includes(newName)) throw { message: "already changed!" };
//     const newMessage = data.replace(oldName, newName);
//     await writeFile(fileName, newMessage, "utf8");
//     return newMessage;
//   } catch (error) {
//     throw error;
//   }
// };
// function main() {
//   changeFileData()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log("outside catch: ", err);
//     });
// }

// main();
