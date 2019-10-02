// ======= while ========//

var perhitungan = 0;

console.log("looping while pertama");

while (perhitungan < 20){
  console.log(perhitungan+" - I Love Coding");
  perhitungan=perhitungan+2;
}

console.log("looping while kedua");

while (perhitungan > 0){
  console.log(perhitungan+" - I Will become full-stack developer");
  perhitungan=perhitungan-2;
}

// ======= for ========//

console.log("\nlooping for pertama");

for(var i=0; i<20; i++){
  console.log(i+" - I Love Coding");
}

console.log("looping for kedua");

for(var i=20; i>0; i--){
  console.log(i+" - I Love Coding");
}

// ======= Ganjil Genap ========//

for (var i=0; i<100; i++){
  j=i%2;
  if (j==0){
    console.log(i+" GENAP");
  }
  else if (j>0){
    console.log(i+" GANJIl");
  }
}

//========kelipatan========//

console.log("\nPertambahan 2\n    ");

for(var i=0; i<100; i+= 2){
  var a=i%3;
  if (a==0){
    console.log(i+" keliapatan 3");
  }
  else {
    console.log("");
  }
}

console.log("\n");

console.log("Pertambahan 5\n    ");

for(var i=0; i<100; i+= 5){
  var a=i%6;
  if (a==0){
    console.log(i+" keliapatan 6");
  }
  else {
    console.log("");
  }
}

console.log("\n");

console.log("Pertambahan 9\n     ");

for(var i=0; i<100; i+= 9){
  var a=i%10;
  if (a==0){
    console.log(i+" keliapatan 10");
  }
  else {
    console.log("");
  }
}
