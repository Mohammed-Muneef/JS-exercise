var hours = new Date().getHours();

if(hours>=0 && hours<12){
    console.log("morning")
}
else if(hours>=12 && hours<17){
    console.log("afternoon")
}
else if(hours>=17 && hours <21){
    console.log("evening")
}
else{
    console.log("night")
}