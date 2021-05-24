console.log(Number.isFinite(5/0));
console.log(Number.isFinite(132));
// =========================
console.log(Number.isInteger(540));
console.log(Number.isInteger(540.52));
// =========================
console.log(Number.isNaN(0 / 0)); 
console.log(Number.isNaN(undefined));
// =========================
console.log(Number.isSafeInteger(Math.pow(2, 53)));
console.log(Number.isSafeInteger(Math.pow(2, 53)-1))
// =========================
let numObj = 12345.6789;
console.log(numObj.toFixed());
console.log(numObj.toFixed(3));
// =========================
let numOj = 5.123456
console.log(numOj.toPrecision());
console.log(numOj.toPrecision(3));
// =========================
let ni= 43;
console.log(ni.toString());
// =========================
const numOb = new Number(42);
console.log(typeof numOb);

const nm = numOb.valueOf();
console.log(nm);

console.log(typeof nm);


// 2nd 
console.log(Number.isFinite(9/0));
console.log(Number.isFinite(12));
// =========================
console.log(Number.isInteger(6/3));
console.log(Number.isInteger(354.52));
// =========================
console.log(Number.isNaN(0 / 0)); 
console.log(Number.isNaN(undefined));
// =========================
console.log(Number.isSafeInteger(Math.pow(2, 432)));
console.log(Number.isSafeInteger(Math.pow(2, 34)-3))
// =========================
let nmbObj = 123.5665;
console.log(nmbObj.toFixed());
console.log(nmbObj.toFixed(3));
// =========================
let nmbrOj = 5.123456
console.log(nmbrOj.toPrecision());
console.log(nmbrOj.toPrecision(3));
// =========================
let nmbr= 43;
console.log(nmbr.toString());
// =========================
const nmbrOb = new Number(42);
console.log(typeof nmbrOb);

const num = nmbrOb.valueOf();
console.log(num);

console.log(typeof num);