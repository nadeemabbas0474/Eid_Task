let Number = [10,11,12,13,14,15,16,12,17,18,19,12,20,[23,323,32,[2321,323]]]
console.log(Number);
console.log(Number.some((element) => element % 2===0));
console.log(Number.map(x => x -4));
console.log(Number.map(x => x +3)); // mathemathical operation with array
console.log(Number.lastIndexOf(12)); // last index of element in array
let mnnnd = Object.keys(Number) // creating keys
console.log(mnnnd)
console.log(Number.join(' + ')) // show the array 
let mnr = Number.filter(word => word.length < 2)
console.log(mnr)
console.log(Number.includes(15));// it will check the element is in or not
console.log(Number.includes('hd laptop'));
Number.forEach(element => console.log(element)); // change direction
console.log(Number.flat()); // concatenate all nested arrays in single array
console.log(Number.flat(2));
console.log(Number.indexOf(12)) // give you the index of specific no
console.log(Number.findIndex(element => element > 13)) // it will find the index of given number
console.log(Number.findIndex(element => element < 13))
console.log(Number.find(element => element > 15)); // it will find you the no
console.log(Number.find(element => element < 15));
console.log(Number.fill(6,5)) // fill is used to fill in array
const isBelow = (currentValue) => currentValue > 27; // every is boolean expression 
console.log(Number.every(isBelow));
// copywithin
console.log(Number.copyWithin(3,4,5));// it will copy index 4 in index 3 
console.log(Number.copyWithin(3,4));
const itr = Number.entries();
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);

console.log(Number.filter(word => word.length !==4))
console.log(Number.length);
console.log(typeof(Number));
Number.push(12,32)
console.log(Number);
console.log(Number.unshift(2332))
console.log(Number.toString());
console.log(Number.pop());
console.log(Number.shift())
console.log(Number[4]);
console.log(Number[5]= 122);
console.log(Number.reverse())
console.log(Number.indexOf(17)) // if index is not match it will display -1
console.log(Number.slice(3))
console.log(Number.slice(4,7))
Number.splice(1,0,'bed');
Number.splice(4, 3, 'soop'); // add in index number 
Number.splice(4, 3, 'soop','matan');
console.log(Number)

// ============== 2nd Array ==============
const group = ['nadeem', 'musaibe', 'imran' ,'nadeem',['hoper','kiu'],'shafi', 'irfan', 'zahid']
console.log(group.filter(word => word.length > 6))
console.log(group.length);
console.log(typeof(group));
group.push('shahzad','bakari')
console.log(group);
console.log(group.unshift(2332))
console.log(group.toString());
console.log(group.pop());
console.log(group.shift())
console.log(group[4]);
console.log(group)
console.log(group[5]= 122);
console.log(group.reverse())
console.log(group.indexOf('irfan')) // if index is not match it will display -1
console.log(group.slice(3))
console.log(group.slice(3,6))
group.splice(4, 0, 'soop','matan');// index delete element
console.log(group)
console.log(group.some((element) => element % 2===0));
console.log(group.map(x => x *4));
console.log(group.map(x => x +3)); // mathemathical operation with array
console.log(group.lastIndexOf('nadeem')); // last index of element in array
let mnnnds = Object.keys(group) // creating keys
console.log(mnnnds)
console.log(group.join(' + ')) // show the array 
let mnrs = group.filter(word => word.length <=5)
console.log(mnrs)
console.log(group.includes('nadeem'));// it will check the element is in or not
group.forEach(element => console.log(element)); // change direction
console.log(group.flat()); // concatenate all nested arrays in single array
console.log(group.indexOf('imran')) // give you the index of specific no
console.log(group.findIndex(element => element = 'imran')) // it will find the index of given number
console.log(group.find(element => element <= 'imran')); // it will find you the no
console.log(group.find(element => element < 15));
console.log(group.fill(6,3,5)) // fill is used to fill in array
const isBelows = (currentValue) => currentValue > 27; // every is boolean expression 
console.log(Number.every(isBelows));
// copywithin
console.log(group.copyWithin(3,2));// it will copy index 4 in index 3 
console.log(group.copyWithin(3,4));
const itrs = group.entries();
console.log(itrs.next().value);
console.log(itrs.next().value);
console.log(itrs.next().value);
console.log(group.concat(Number));

let Array3 = [1, 'farhan', 2, 'waji', 4 , 'haji', 9, 'waqas']
let place = ['hisper','hoper',{1:'gosgoshall',2:'boroshall',3:'ratal'},'nagar', 'summayar',21,32,132,['bat', 'ball', 2, 23]]
console.log(place)
console.log(place.filter(word => word.length > 6))
console.log(place[1])
console.log(place.length);
place.push('shahzad','bakari')
console.log(place.unshift(2332))
console.log(place.toString());
console.log(place.pop());
console.log(place.shift())
console.log(place[4]);
console.log(place[5]= 122);
console.log(place.reverse())
console.log(place.indexOf('irfan')) // if index is not match it will display -1
console.log(place.slice(1,2))
console.log(place.slice(3,6))
console.log(place.splice(5, 0, 'ausqurdas','shayar'));// index delete insert_element
console.log(place);

console.log(place.some((element) => element % 2===0));
console.log(place.map(x => x +3)); // mathemathical operation with array
console.log(place.lastIndexOf('nadeem')); // last index of element in array if the element is not in array then it will display -1
let mnnd = Object.keys(place) // creating keys
console.log(mnnd)
console.log(place.join(' + ')) // show the array 
console.log(place.includes('hoper'));// it will check the element is in or not
place.forEach(element => console.log(element)); // change direction
console.log(place.flat()); // concatenate all nested arrays in single array
console.log(place.indexOf('nagar')) // give you the index of specific no
console.log(place.findIndex(element => element <34)) // 
console.log(place.find(element => element =='hoper')); // it will find you the no
console.log(place.find(element => element > 15));
console.log(place.fill(6,3,6)) // fill element in indexs of array
const isBelowes = (currentValue) => currentValue > 27; // every is boolean expression 
console.log(place.every(isBelowes));
console.log(place.copyWithin(4,5,6));// it will copy index 4 in index 3 
console.log(place.copyWithin(2,3));
const itres = place.entries();
console.log(itres.next().value);
console.log(itres.next().value);
console.log(itres.next().value);
let color = ['red', 'black', 'blue', 'yellow', 'white','green',[23,3232,4322,2132,1323123,2]]



