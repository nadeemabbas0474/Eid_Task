let dvplr = {firstName: 'Nadeem', secondName: 'Abbas', age: 24, address: 'hoper', Qualifiacation:{matric:2015, Fsc:2017,boards:['KIU','FBISE']},gender:'male',married:'single'};
let object = {firstName: 'Muhammad', secondName: 'Abbas', age: 24, address: 'hoper'};
console.log(dvplr);
console.log(dvplr['Qualifiacation'].matric)
// ===========================
console.log(Object.values(dvplr));
// ===========================
Object.seal(dvplr);
dvplr.age = 33;
console.log(dvplr.age);
delete dvplr.age; // cannot delete when sealed
console.log(dvplr.age);
// ===========================
console.log(Object.keys(dvplr));
// ===========================
console.log(Object.isFrozen(dvplr)); // boolen representing weither it is frozen or not 
Object.freeze(dvplr)
// ===========================
console.log(Object.isSealed(dvplr));
Object.seal(dvplr)
console.log(Object.isSealed(dvplr));
// ===========================
console.log(Object.isExtensible(dvplr)); // it give you permission to add more properties 
console.log(Object.preventExtensions(dvplr)); // it can prevent further more properties
dvplr['firstName'] = 'dfad';
console.log(dvplr);
console.log(Object.isExtensible(dvplr));
// ===========================
const a = Symbol('a');
const b = Symbol.for('b');
dvplr[a] = 'localSymbol';
dvplr[b] = 'globalSymbol';
const objectSymbols = Object.getOwnPropertySymbols(dvplr); // it will return the symbol of the given element of object
console.log(objectSymbols.length);
console.log(objectSymbols[0]);
// ==============================
console.log(Object.getOwnPropertyNames(dvplr)); // makeing array from the keys of object
// ===========================
let descri = Object.getOwnPropertyDescriptor(dvplr, 'secondName');
console.log(descri.configurable); // configura the element of array if it is in the array it will display ture
console.log(descri.value); // it will display the value of the key in object
// ===========================
const boy = new Map([
    ['class','1st year',],
  ['age', 23]
  ]);
  const obj = Object.fromEntries(boy);
  console.log(obj);
// ===========================
Object.freeze(dvplr); // it never change its original elements
dvplr.firstName = 'hassain';
console.log(dvplr.firstName);
// ===========================
for(let [key, value] of Object.entries(dvplr))
{
      console.log(`${key}: ${value}`) // display elements of the array in pair 
  }
  console.log(dvplr.Qualifiacation);
  console.log(dvplr.Qualifiacation.lenght)
  console.log(dvplr['age']);
  console.log(dvplr)
  // ===========================
  const returnedTarget = Object.assign(object,dvplr)
  console.log(object)
  console.log(returnedTarget)
  // ===========================
  const person = {
        isHuman: false,
        name: 'nadeem',
        printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  const me = Object.create(person);
    me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  me.printIntroduction();
// ===========================
const object1 = {};
Object.defineProperties(object1, {
  property1: {
      value: 42,
    writable: true,
  },
  property2: {}
});
console.log(object1.property1);

// =========== 2nd =============

console.log(dvplr)
// ===========================
console.log(Object.values(dvplr));
// ===========================
Object.seal(dvplr);
dvplr.age = 33;
console.log(dvplr.age);
delete dvplr.age; // cannot delete when sealed
console.log(dvplr.age);
// ===========================
console.log(Object.keys(dvplr));
// ===========================
Object.freeze(dvplr)
console.log(Object.isFrozen(dvplr)); // boolen representing weither it is frozen or not 
// ===========================
console.log(Object.isSealed(dvplr));
Object.seal(dvplr)
console.log(Object.isSealed(dvplr));
// ===========================
console.log(Object.isExtensible(dvplr)); // it give you permission to add more properties 
console.log(Object.preventExtensions(dvplr)); // it can prevent further more properties
dvplr['firstName'] = 'dfad';
console.log(dvplr);
console.log(Object.isExtensible(dvplr));
// ===========================
const c = Symbol('a');
const d = Symbol.for('b');
object[c] = 'localSymbol';
object[d] = 'globalSymbol';
const objectSymbl = Object.getOwnPropertySymbols(dvplr); // it will return the symbol of the given element of object
console.log(objectSymbl.length);
console.log(objectSymbl[0]);
// ==============================
console.log(Object.getOwnPropertyNames(dvplr)); // makeing array from the keys of object
// ===========================
let descri1 = Object.getOwnPropertyDescriptor(dvplr, 'secondName');
console.log(descri1.configurable); // configura the element of array if it is in the array it will display ture
console.log(descri1.value); // it will display the value of the key in object
// ===========================
const girl = new Map([
    ['class','1st year',],
  ['age', 23]
  ]);
  const obj1 = Object.fromEntries(girl);
  console.log(obj1);
// ===========================
Object.freeze(object); // it never change its original elements
object.firstName = 'hassain';
console.log(object.firstName);
// ===========================
for(let [key, value] of Object.entries(dvplr))
{
      console.log(`${key}: ${value}`) // display elements of the array in pair 
  }
  console.log(dvplr.Qualifiacation);
  console.log(dvplr.Qualifiacation.lenght)
  console.log(dvplr['age']);
  console.log(dvplr)
  // ===========================
  const obj2 = {
    firstName: 'Muhammad',
     secondName: 'Abbas',
        printIntroduction: function() {
      console.log(`My firstName is ${this.firstName}. My secondName is ${this.secondName}`);
    }
  };
  const my = Object.create(obj2);
    my.firstName = 'Matthew'; // "name" is a property set on "me", but not on "person"
  my.secondName = 'ali'; // inherited properties can be overwritten
  my.printIntroduction();
// ===========================
const objct1 = {};
Object.defineProperties(objct1, {
  property1: {
      value: 42,
    writable: true,
  },
  property2: {}
});
console.log(object1.property1);