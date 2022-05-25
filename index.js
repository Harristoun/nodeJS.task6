//
const fs = require("fs");
const figlet = require("figlet");




fs.readFile("text.txt", "utf8", function (err, data) {
  if (!err)   {  
    console.log(data);
  }
  figlet (data, function(err,data) {
    if (err) {
        console.log(err);
    } else {
    console.log(data)
    }
})
})