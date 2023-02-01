function printLines() {
  console.log(secondLine);

  var firstLine = "I'm your first line!";
  console.log(firstLine);

  var secondLine = "I'm your second line";
  console.log(secondLine);
}

//matrix //

var matrix = [
  [1, 2, 3],
  ["John", "Jane", "Mike"],
];

matrix[0][1];
matrix[2][2];
matrix[0][4] = 5;
matrix[1] = [];

//function //

function myFunc(a, b) {
  if (!b) {
    b = 1;
  }
  return a + b;
}

myFunc(1);
