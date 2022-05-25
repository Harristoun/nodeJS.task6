// тут код, который удалит файл lorem.txt
const fs = require("fs");

fs.unlink("lorem.txt",function (err) {
  if (err) {
    console.log("error");
  } else {
    console.log("file has been removed");
  }
});
