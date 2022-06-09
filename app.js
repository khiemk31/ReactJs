// function logger([a, b, ...rest]) {
//   console.log(a);
//   console.log(rest);
// }
// logger([1, 2, 12312, 434, 5454]);

//Spread
var array = ["Javascript", "Ruby", "PHP"];
// var array2 = ["RectJS", "Dart"];
// var array3 = [...array2, ...array];
// console.log(array3);
// var obj1 = {
//   name: "name1",
// };
// var obj2 = {
//   price: 2345,
// };
// var obj3 = {
//   ...obj1,
//   ...obj2,
// };

// console.log(obj3);

// function logger(...rest) {
//   for (var i = 0; i < rest.length; i++) {
//     console.log(rest[i]);
//   }
// }

// logger(...array);

// var course = {
//   name: "adsf",
//   price: 1234,
//   image: "123213",
//   children: {
//     name: "khhh",
//   },
// };
// var {
//   name: name1,
//   children: { name },
//   descprition = "abc",
// } = course;
// console.log(descprition);

function logger(...params) {
  console.log(params);
}

console.log(logger(12, 3, 4, 56, 7, 8));
