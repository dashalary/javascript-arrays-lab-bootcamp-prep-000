var kittens = ["Milo", "Otis", "Garfield"] //define your array here
appendKitten();

function destructivelyAppendKitten(name) {
kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}




  const kittens = ["Milo", "Otis", "Garfield"];
  const appendKitten(name) = kittens.concat("Broom");
  console.log(kittens);
