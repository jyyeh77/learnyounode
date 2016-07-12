var fs = require('fs');
    path = require("path");

var directory = process.argv[2];

// second parameter, or the extension name is modified with preceding '.'
var extension = '.' + process.argv[3];

var printExtensions = fs.readdir(directory, function(err, files){
  if (err){
    throw err;
  }

  // checks if extension of files in callback matches extension parameter
  files.forEach(function (file){
    if (path.extname(file) === extension){
      console.log(file);
    }
  });

});

printExtensions;
