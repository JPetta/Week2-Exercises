
//======== Barisan Bintang =========//

var rows = 5;
var i = 0;
for (var i =0; i < rows; i++){
  var bintang="";
  for (var j = 0; j < rows; j++){
    bintang += "*"
  }
  console.log(bintang)
}

//======== Barisan Bintang Nested Looping Incremental =========//

for(var i = 1; i <= 5; i++) {
    var bintang = "";
    for(var j = 1; j<= i; j++) {
      bintang += "*";  
    }
  console.log(bintang);
}

// //======== Barisan Bintang Nested Looping Incremental =========//

var rows = 5;
for(var i=rows; i > 0; i--){
  var bintang ="";
  for(var j = 1; j<= i; j++){
    bintang += "*";
  }
  console.log(bintang);
}
