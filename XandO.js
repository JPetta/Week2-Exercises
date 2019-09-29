function xo(str) {
  var hurufX ="";
  var hurufO ="";
  for (var i = 0; i <= str.length; i++){
    if(str[i] == "x"){
      hurufX += str[i];
    }

    if(str[i] == "o"){
      hurufO += str[i];
    }
  }

  if(hurufX.length==hurufO.length){
    console.log("true")
  }
  else if(hurufX.length!=hurufO.length){
    console.log("false")
  }

}


// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
