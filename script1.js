var greeting = 'hello';
var name = 'world'
var result = greeting+' '+name;
console.log(result)
// alert(result);

var replacedResult1 = result.replaceAll('l','1');
var replacedResult2 = replacedResult1.replaceAll('o','0')
console.log(replacedResult2);


function reverseString(str) { 
    const strRev =  str.split('').reverse().join(''); 
    console.log(strRev); 
} 
reverseString(replacedResult2)
