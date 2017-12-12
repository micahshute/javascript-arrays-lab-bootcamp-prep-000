const app = "I don't do much."
var kittens = restoreKittens()

function restoreKittens(){
  return ["Milo", "Otis", "Garfield"]
}


function destructivelyAppendKitten(name){
  window.kittens = restoreKittens()
  window.kittens.push(name)
  return window.kittens
}

function destructivelyRemoveLastKitten(){
  window.kittens = restoreKittens()
  window.kittens.pop()
  return window.kittens
}

function destructivelyRemoveFirstKitten(){
  window.kittens = restoreKittens()
  window.kittens.shift()
  return window.kittens
}

function appendKitten(name){
  
}