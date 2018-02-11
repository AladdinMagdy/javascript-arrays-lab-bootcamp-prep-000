const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
<<<<<<< HEAD
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function appendKitten(name) {
  
  return [...kittens, name];
}
function prependKitten(name) {

  return [name, ...kittens];
}
function removeLastKitten() {
  
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten() {
 
  return kittens.slice(1, kittens.length);
=======
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
>>>>>>> d2ead89e01086087fe1e3b17184f25d2ba384bd4
}