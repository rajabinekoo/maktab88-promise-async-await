// open, appendFIle, close, access, readFile

const { appendFile, open, close, readFile, access, constants } = require("fs");

// appendFile("./text.txt", `\nApended From Node.js`, function (error) {
//   if (error) {
//     console.log(
//       new Error(`There is an error in appending text to target file!`)
//     );
//   }
//   console.log(`Text successfully appended to the target.`);
// });

// callback hell
open("./text.txt", "r", function (openError, data) {
  if (openError) {
    console.log(new Error(openError.message));
  } else {
    appendFile("./text.txt", `\n\nAdded From Node.js`, (appendError) => {
      if (appendError) {
        console.log(appendError.message);
      } else {
        console.log(`Text successfully appended to the target.`);
        close(data, (err) => {
          if (err) {
            console.log(err.message);
          } else {
            console.log("ok");
            access("./text.txt", constants.R_OK, (err) => {
              if (!err) {
                readFile("./text.txt", "utf-8", (err, data) => {
                  if (!err) {
                    console.log(data);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
