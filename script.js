/*function printLines() {
  console.log(secondLine);

  var firstLine = "I'm your first line!";
  console.log(firstLine);

  var secondLine = "I'm your second line";
  console.log(secondLine);
}*/

//matrix //
/*
var matrix = [
  [1, 2, 3],
  ["John", "Jane", "Mike"],
];

matrix[0][1];
matrix[2][2];
matrix[0][4] = 5;
matrix[1] = [];*/

//function //

/*function myFunc(a, b) {
  if (!b) {
    b = 1;
  }
  return a + b;
}

myFunc(1);*/

// DOG //

/*var dog = {
  breed: "Golden retriever",
  bark: function () {
    return "Wuf Wuf";
  },
};

console.log(dog.breed);
console.log(dog.bark());

var crniPas = dog("crni pas");*/

// Polaznici //

var polaznici = [
  {
    name: "Igor ",
    surname: "Boroja",
    age: 18,
  },

  {
    name: "Ivan ",
    surname: "Munitić",
    age: 13,
  },

  {
    name: "Aleks ",
    surname: "Ivanac",
    age: 24,
  },

  {
    name: "Danijel ",
    surname: "Hrgić",
    age: 67,
  },

  {
    name: "Luka ",
    surname: "Modrić",
  },
];

function checkAge(age, name, surname) {
  var ageResponse = "";
  var fullName = name + "" + surname;

  switch (true) {
    case age < 18:
      ageResponse = fullName + " je maloljetnik/maloljetnica";
      break;
    case age >= 18 && age < 67:
      ageResponse = fullName + "je punoljetnik/punoljetnica";
      break;
    case age >= 67:
      ageResponse = fullName + " je umirovljenik/umirovljenica";
      break;
    default:
      ageResponse = fullName + " se osoba još nije rodila";
  }

  return ageResponse;
}

polaznici.forEach((polaznik) => {
  console.log(checkAge(polaznik.age, polaznik.name, polaznik.surname));
});
