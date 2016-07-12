var fs = require('fs');

// stores Buffer object
var path = fs.readFileSync(process.argv[2]);


// converts buffer object into array, delimited by line breaks
var pathArray = path.toString().split('\n');


console.log(pathArray.length-1);
