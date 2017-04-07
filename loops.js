function forLoop(array){
  for ( let i = 0; i < 25; i++ ){
    if (i === 1) {
      array.push("I am 1 strange loop.")
      } else {
        array.push("I am " + i + " strange loops.")
      }
    }
  return array
}

/*function forLoop() {
  var array = []
  for (var i = 0; i <= 25; i++) {
    if (i === 1)if (i > 1) {array[array.length] = "I am ${i} strange loops."
  }
}
  return array
}*/

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(array) {
    function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.splice(0, 1);
  } while (array.length > 0 && maybeTrue());
  return array
}
