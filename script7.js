var arr = ["Hello", "World", "in", "a", "frame"];

var largest=0;
arr.forEach(element => {
    if(element.length>largest)
    {
        largest=element.length;
    } 
});



console.log("*".repeat(largest+4));
arr.forEach(element=>{
    let space=(largest+2)-(element.length);
    // console.log(space)
    console.log("* "+element+" ".repeat(space-1)+"*")
});
console.log("*".repeat(largest+4));

for(i=0;i<largest+4;i++){
    console.log()
}