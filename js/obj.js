let personName = "Akobir";
let personSurname = "Parmonqulov";
let personAge = 20;
let personAddress = "Sirg'ali";
let personIsMarried = false;

let person = {
  name: "Akobir",
  surname: "Parmonqulov",
  age: 20,
  address: "Sirg'ali",
  isMarried: false,
  friends: ["Asadbek", "Farhod", "Asqar", "Muhammadziyo"],
  study: {
    school: "48-maktab",
    lyceum: "Tekstik litsiyi",
    university: "TATU"
  }
}

let people = [];

let addPerson = function(name, surname, age, telephone) {
  let person = {
    ism: name,
    familiya: surname,
    yosh: age,
    telefon: telephone
  }

  people.push(person)
}

// let addPerson = function(name, surname, age, telephone) {
//   return {
//     ism: name,
//     familiya: surname,
//     yosh: age,
//     telefon: telephone
//   }
// }

// let addPerson = function(name, surname, age, telephone) {
//   return {
//     name,
//     surname,
//     age,
//     telephone
//   }
// }

let info = addPerson("Asadbek", "Mirxoliqov", 22, "998901234567");
// console.log(info);

// console.log(people);

let arr = [
  {
    name: 'Asadbek', 
    surname: 'Mirxoliqov',
    yosh: 22, 
    telefon: '998901234567'
  },
  {
    name: "Akobir",
    surname: "Parmonqulov",
    age: 20,
    address: "Sirg'ali",
    isMarried: false
  }
]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].name, arr[i].surname);
}













































// let personName = "To'lqin";
// let personSurname = "Bobomirzayev";
// let personAge = 21;
// let personAddress = "Yangiyo'l";
// let personIsMerried = false;

// let person = {
//   name: "To'lqin",
//   surname: "Bobomirzayev",
//   age: 21,
//   address: "Yangiyo'l",
//   isMerried: false,
//   family: {
//     father: "ism1",
//     mother: "ism2",
//     brother: "ism3",
//   },
//   cars: ["Ferrari", "BMW", "Malibu"]
// }

// // console.log(person);

// person.surname
// person['name']

// function addPerson(name, surname, telepone, nima) {
//   let personInfo = {
//     ism: name,
//     familiya: surname,
//     raqam: telepone,
//   }

//   return personInfo;
// }

// let info = addPerson("Ali", "Valiyev", "987")

// // console.log(info);

// let people = [
//   {
//     name: "To'lqin",
//     surname: "Bobomirzayev",
//     age: 21,
//     address: "Yangiyo'l",
//     isMerried: false,
//   },
//   {
//     name: "Ali",
//     surname: "Ali",
//     age: 21,
//     address: "Yangiyo'l",
//     isMerried: false,
//   },
//   {
//     name: "Vali",
//     surname: "Vali",
//     age: 21,
//     address: "Yangiyo'l",
//     isMerried: false,
//   },
// ]

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name, people[i].surname,  people[i].age,  people[i].isMerried);
// }