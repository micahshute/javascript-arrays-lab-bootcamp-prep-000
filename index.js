const app = "I don't do much."
var kittens = restoreKittens()

fuction restoreKittens(){
  return ["Milo", "Otis", "Garfield"]
}


function destructivelyAppendKitten(name){
  kittens = restoreKittens()
  kittens.push(name)
}