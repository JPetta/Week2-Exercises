// ======= while ========//

var perhitungan = 0;

console.log("looping pertama");

while (perhitungan < 20){
  console.log(perhitungan+" - I Love Coding");
  perhitungan=perhitungan+2;
}

console.log("looping kedua");

while (perhitungan > 0){
  console.log(perhitungan+" - I Will become full-stack developer");
  perhitungan=perhitungan-2;
}

// ======= for ========//

console.log("looping pertama");

for(var i=0; i<20; i++){
  console.log(i+" - I Love Coding");
}

console.log("looping kedua");

for(var i=20; i>0; i--){
  console.log(i+" - I Love Coding");
}

// ======= Ganjil Genap ========//

for (var i=0; i<100; i++){
  i=i%2;
  if (i==0){
    console.log("GENAP");
  }
  else if (i>0){
    console.log("GANJIl");
  }
}

//========kelipatan========//

console.log("Pertambahan 2\n    ");

for(var i=0; i<100; i+= 2){
  var a=i%3;
  if (a==0){
    console.log(i+" keliapatan 3");
  }
}

console.log("\n");

console.log("Pertambahan 5\n    ");

for(var i=0; i<100; i+= 5){
  var a=i%6;
  if (a==0){
    console.log(i+" keliapatan 6");
  }
}

console.log("\n");

console.log("Pertambahan 9\n     ");

for(var i=0; i<100; i+= 9){
  var a=i%10;
  if (a==0){
    console.log(i+" keliapatan 10");
  }
}