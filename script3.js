function sandwich(bread,cheese){
    var breadRequired = bread/2;
    return Math.trunc(Math.min(breadRequired,cheese))

}

console.log(sandwich(9,9))

