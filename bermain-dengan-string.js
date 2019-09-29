var word = 'JavaScript';
var second = ' is';
var third = ' awesome';
var fourth = ' and';
var fifth = ' I';
var sixth = ' love';
var seventh = ' it!';

word = word+second+third+fourth+fifth+sixth+seventh;

console.log(word);

//===========================================//

var word = "nama saya jovi"

var firstWord = word[0]+word[1]+word[2]+word[3];
var secondWord = word[5]+word[6]+word[7]+word[8];
var thirdWord = word[10]+word[11]+word[12]+word[13];

console.log("Kata pertama "+firstWord);
console.log("Kata kedua "+secondWord);
console.log("Kata ketiga "+thirdWord);

//===========================================//

var word = "nama saya jovi"

var firstWord = word.substring(0,4);
var secondWord = word.substring(5,9);
var thirdWord = word.substring(10,14);

console.log("Kata pertama "+firstWord);
console.log("Kata kedua "+secondWord);
console.log("Kata ketiga "+thirdWord);

//===========================================//

var word = "nama saya jovi"

var firstWord = word.substring(0,4);
var secondWord = word.substring(5,9);
var thirdWord = word.substring(10,14);

var firstWordLength = firstWord.length;
var secondWordLength = secondWord.length;
var thirdWordLength = thirdWord.length;

console.log("Kata pertama "+firstWord+" with length of: "+firstWordLength);
console.log("Kata kedua "+secondWord+" with length of: "+secondWordLength);
console.log("Kata ketiga "+thirdWord+" with length of: "+ thirdWordLength);