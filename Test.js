var arr1 = "john".split(''); 
// This line splits the string "john" into an array of characters and assigns it to arr1. So, arr1 becomes ['j', 'o', 'h', 'n'].

var arr2 = arr1.reverse();
// This line reverses the array arr1 in place and assigns it to arr2.
//  The reverse() method modifies the original array and also returns a reference to the same array, so arr2 will be a reference to the reversed arr1.


var arr3 = "jones".split('');
// This line splits the string "jones" into an array of characters and assigns it to arr3. So, arr3 becomes ['j', 'o', 'n', 'e', 's'].

arr2.push(arr3);
// his line pushes the entire arr3 array as a single element to the end of arr2. 
// So, arr2 will now look like ['s', 'e', 'n', 'o', 'j', ['j', 'o', 'n', 'e', 's']]. 

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
//OUTPUT The output of code is array 1: length=5 last=j,o,n,e,s
//                             array 2: length=5 last=j,o,n,e,s. 
