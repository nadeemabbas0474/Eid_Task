const about = '  Me nadeem abbas from hoper.Basically i am from Hoper but living in danyore   ';
console.log(about + '<br>');
// ====================
console.log(about.trim());
console.log(about.trimEnd());
console.log(about.trimStart());
// ====================
console.log(about.valueOf());
console.log(about.substr(6)) //
// ====================
document.write('This is what a ' + about.sup() + ' looks like.' + '<br>');
document.write('This is what a ' + about.sub() + ' looks like.');
// ====================
console.log(about.startsWith('Me'))
// ====================
const words = about.split('');
console.log(words[5]);
console.log(about.split(" ")) // split whole sentence in character
// ====================
console.log(about.slice(6)) // display index no of the charater
// =====================
const reg = /[^\w\s]/g;
console.log(about.search(reg));// any character that is not a word character . whitespace
console.log(about[about.search(reg)]);
// =====================
console.log(about.replace('hoper', 'nagar'))
// =====================
console.log(about.repeat(3)); // repeat whole string 
// =====================
const filePath = String.raw`C:\Development\profile\html5.html`; // file upload using raw
console.log(`The file was uploaded from: ${filePath}`);
// =====================
const regex = /[A-B]/g;
document.write(about.match(regex)); // it pattren matching 
// =====================
const url = 'http//:www.google.com';
console.log('click to returen' + about.link(url));
// =====================
console.log(about.small());
console.log(about.big());
console.log(about.fontsize(7));
document.write(about.blink()+ '<br>');
document.write(about.bold()+ '<br>');
document.write(about.italics()+ '<br>');
document.write(about.strike()+ '<br>');
// =====================
const index = 11;
console.log(`The character at index ${index} is ${about.charAt(index)}`); // it will show the character from index no 6
console.log("The character at index 3 is '" + about.charAt(3)   + "'");
console.log(about.charAt(5))
// =====================
console.log(`The character at index ${about.charCodeAt(index)} is ${about.charCodeAt(index)}`); // it will create the code of the charater in given index
// =====================
console.log(about.fixed())// creating tt tag in html
// =====================
console.log(about.endsWith('nagar.'));
console.log(about.endsWith('naga'));
// =====================
document.write(about.fontcolor('blue'));
// =====================
const word = 'nadeem';
console.log(`The word "${word}" ${about.includes(word) ? 'is' : 'is not'} in the about`);// checking weither the word is in or not in string
console.log(about.includes('abbas'));
// =====================
const searchTerm = 'hoper';
const indexOfFirst = about.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`); // index of first element in object
console.log('Index of first hoper from start is  ' +about.indexOf('hoper')) // index of first element in object 
console.log(`The index of the 2nd "${searchTerm}" is ${about.indexOf(searchTerm, (indexOfFirst + 1))}`);// second element index in object
// =====================
console.log(`The index of the first "${searchTerm}" from the end is ${about.lastIndexOf(searchTerm)}`); // element in lastindex of the object


const from = "   any character that is not a word character . whitespace";
console.log(from + '<br>');
// ====================
console.log(from.trim());
console.log(from.trimEnd());
console.log(from.trimStart());
// ====================
console.log(from.valueOf());
console.log(from.substr(6)) //
// ====================
document.write('This is what a ' + from.sup() + ' looks like.' + '<br>');
document.write('This is what a ' + from.sub() + ' looks like.');
// ====================
console.log(from.startsWith('Me'))
// ====================
const wrd = from.split('');
console.log(wrd[5]);
console.log(from.split(" ")) // split whole sentence in character
// ====================
console.log(from.slice(7)) // display index no of the charater
// =====================
const regx = /[^\w\s]/g;
console.log(from.search(regx));// any character that is not a word character . whitespace
console.log(from[from.search(regx)]);
// =====================
console.log(from.replace('character', 'word'))
// =====================
console.log(from.repeat(3)); // repeat whole string 
// =====================
const fileslePath = String.raw`C:\Development\profile\html5.html`; // file upload using raw
console.log(`The file was uploaded from: ${fileslePath}`);
// =====================
const rgex = /[A-B]/g;
document.write(from.match(rgex)); // it pattren matching 
// =====================
const url1 = 'http//:www.facebook.com';
console.log('click to returen' + from.link(url1));
// =====================
console.log(from.small());
console.log(from.big());
console.log(from.fontsize(7));
document.write(from.blink()+ '<br>');
document.write(from.bold()+ '<br>');
document.write(from.italics()+ '<br>');
document.write(from.strike()+ '<br>');
// =====================
const indix = 11;
console.log(`The character at index ${indix} is ${from.charAt(indix)}`); // it will show the character from index no 6
console.log("The character at index 3 is '" + from.charAt(3)   + "'");
console.log(from.charAt(5))
// =====================
console.log(`The character at index ${from.charCodeAt(indix)} is ${about.charCodeAt(indix)}`); // it will create the code of the charater in given index
// =====================
console.log(from.concat(' ',about))
// =====================
console.log(from.fixed())// creating tt tag in html
// =====================
console.log(from.endsWith('space'));
console.log(from.endsWith('naga'));
// =====================
document.write(about.fontcolor('blue'));
// =====================
const wordes = 'nadeem';
console.log(`The word "${wordes}" ${from.includes(wordes) ? 'is' : 'is not'} in the about`);// checking weither the word is in or not in string
console.log(from.includes('abbas'));
// =====================
const searchTrm = 'hoper';
const indexOfFirsts = from.indexOf(searchTrm);
console.log(`The index of the first "${searchTrm}" from the beginning is ${indexOfFirsts}`); // index of first element in object
console.log('Index of first hoper from start is  ' +from.indexOf('hoper')) // index of first element in object 
console.log(`The index of the 2nd "${searchTrm}" is ${from.indexOf(searchTrm, (indexOfFirsts + 1))}`);// second element index in object
// =====================
console.log(`The index of the first "${searchTrm}" from the end is ${from.lastIndexOf(searchTrm)}`); // element in lastindex of the object


