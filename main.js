// "use strict";
// let user = {
//   f_name: "Lavesh",
//   l_name: "Gaurav",
// };

// console.log(Object.values(user));

// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let data2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log([...data, ...data2]);
// console.log(data.shift());
// console.log(data);
// console.log(data);
// console.log(data.slice(0, 4));
// console.log(data.sort());
// console.log(data.reverse());
// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }
// function print(value, index) {
//   console.log(`${index} holds the value of ${value}`);
// }

// data.map((x, i) => print(x, i));
// console.log(data.includes(101));

// const user = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//   },
// ];

// // CRUD - Create, Read, Update, Delete
// let id = 3;
// // CREATE
// let newUser = {
//   id: 6,
//   name: "Gaurav",
// };

// console.log([...user, newUser]);

// DELETE
// console.log(user.filter((x) => x.id !== id));

// UPDATE
// console.log(user.map((x) => (x.id === id ? { ...x, name: "Gaurav" } : x)));

// let text = "   ABCDEFGHIJKLMNOPQRSTUVWXYZ,3546372   ";
// console.log(text.);
// console.log(Math.ceil(5.67));

// set
// const letters = new Set(["a", "b", "c", "d", "e"]);
// letters.add("f");
// letters.delete("a");
// console.log(letters.has("g"));
// console.log(letters.size);
// console.log(letters);

// array with unique values
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
// console.log([...new Set(data)]);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let person1 = new Person("Lavesh", 25);
// let person2 = new Person("Gaurav", 26);

// setTimeout(function () {
//   console.log("Output after 2 seconds");
// }, 2000);

// setInterval(function () {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// function print(name) {
//   console.log(name);
// }

// function printName(name) {
//   name("Lavesh");
// }

// printName(print);

// JS PROMISES
// Pending -> Wait forn the Response
// Fulfilled -> Response is received
// Rejected -> Response is not received

// let randomValue = new Promise(function (resolve, reject) {
//   let randomNumber = Math.random();
//   console.log(randomNumber);
//   if (randomNumber > 0.5) {
//     resolve("Promise Is Resolved");
//   } else {
//     reject("Promise Is Rejected");
//   }
// });

// function getDataFromDB() {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((json) =>
//       fetch("https://jsonplaceholder.typicode.com/users/2")
//         .then((response) => response.json())
//         .then((json) =>
//           fetch("https://jsonplaceholder.typicode.com/users/1")
//             .then((response) => response.json())
//             .then((json) => console.log(json))
//             .catch((err) => console.log(err))
//         )
//         .catch((err) => console.log(err))
//     )
//     .catch((err) => console.log(err));
// }

// let getDataFromDB = async () => {
//   try {
//     let response1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let response2 = await fetch("https://jsonplaceholder.typicode.com/users/2");
//     console.log(response1);
//     console.log(response2);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getDataFromDB();

