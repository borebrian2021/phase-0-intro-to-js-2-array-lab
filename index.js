// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];
// function destructivelyAppendCat(name){
// beforeEach(function () {
//     cats.length = 0;
//     cats.push("Milo", "Otis", "Garfield");
//   });
// }
function destructivelyAppendCat(name){
  cats.push(name);
}

function  destructivelyPrependCat(name){
  cats.unshift(name);
  return cats;
}

function  destructivelyRemoveLastCat(){
  cats.pop();
}

function destructivelyRemoveFirstCat(){
  cats.shift();
}

function appendCat(name){
  var newArray = cats.slice();
  // or ES6 way
  // var newArray = [...kittens];
  newArray.push(name)
  return newArray
}
function prependCat(name){
  var cats2=[name, ...cats];
  return cats2;
}
function removeLastCat(){
  var cats2= cats.slice(0,cats.length-1);
  return cats2;
}
function removeFirstCat(){
  var cats2=cats.slice(1);
  return cats2
}