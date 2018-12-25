var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var new = kittens.push(name);
  return new;
}

function prependKitten(name) {
  var new = [name, ...kittens];
  return new;
}

function removeLastKitten() {
  var new = kittens.slice(0, kittens.length - 1);
  return new;
}

function removeFirstKitten() {
  var new = kittens.slice(1, kittens.length);
  return new;
}
