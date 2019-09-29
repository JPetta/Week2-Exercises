//======== Barisan Bintang =========//

var rows = 5;
var i = 0;
while (i < rows){
  console.log("*");
  i++
}

//======== Barisan Bintang Nested Looping Incremental =========//

for(var i = 1; i <= 5; i++) {
      console.log("row");
      for(var j = 1; j<= 5; j++) {
        console.log("*");  
      }
}

//======== Barisan Bintang Nested Looping Incremental =========//

// var rows = 5;
for(var i = 1; i <= 5; i++) {
      console.log("row");
      for(var j = 1; j<= i; j++) {
        console.log("*");  
      }
}
