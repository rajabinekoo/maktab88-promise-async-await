console.log("ok");

function greeting() {
  console.log("Hello Mr.Saber");
}

greeting();

function greetingWithCallback(name, cb) {
  cb(`Hello Mr.${name}`);
}

greetingWithCallback("Saber", (result) => {
  console.log(result);
  setTimeout(function () {
    (() => {
        console.log("ok inner");
    })()
  }, 1000);
  setTimeout(function () {
    console.log("ok inner 2");
  }, 300);
});


for (let index = 0; index < 20000; index++) {
    console.log(index);
}