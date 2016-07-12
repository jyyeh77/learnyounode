var inputsArray = process.argv;

var sum = 0;

for (var i = 2; i < inputsArray.length; i++){
  sum += parseInt(inputsArray[i]);
}

console.log(sum);
