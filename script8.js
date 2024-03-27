let str = "The quick brown fox";
let arr = str.split(" ")
let output="";
arr.forEach(Element=>{
    let s1=Element.slice(1)+""+Element.slice(0,1).toLowerCase()+"ay "
    output+=s1;
    
});
console.log(output.slice(0,1).toUpperCase()+output.slice(1))