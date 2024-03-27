var arr = [1,4,3,2,5,7];

var i = 4-1



for(var right = i+1; right<arr.length; right++)
{
    // console.log(right)
    if(arr[right]>arr[i])
    {
        var greatright=arr[right];
        // console.log(greatright)
        break;
    }
}

for(var left = i-1; left>=0 ;left--){
    // console.log(left)
    if(arr[left]> arr[i])
    {
        var greatleft=arr[left];
        // console.log(greatleft)
        break;
    }
}

console.log(Math.max(greatleft,greatright))