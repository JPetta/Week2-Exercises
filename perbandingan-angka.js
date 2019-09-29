//========= Tugas 1 ==========//

function shoutOut() {
  console.log("Helo function!");
}

shoutOut();

//========= Tugas 2 ==========//

function calculateMultiply(num1,num2){
  return num1*num2;
}

console.log(calculateMultiply(5,6));

//========= Tugas 3 ==========//

function processSentence(n,ag,ad,hob){
  return "Hi nama saya "+n+", umur saya "+ag+" tahun, saya tinggal di "+ad+", saya hobbynya "+hob;
}

var name = "Jovi";
var umur = 22;
var address = "Jl. Dasana Indah Blok Td8 No.30";
var hobby = "menyanyi";

completesentence = processSentence(name,umur,address,hobby);

console.log(completesentence);

