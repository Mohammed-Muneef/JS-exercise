var arr = [1,4,3,2,5,7];

var i = 4
var right = i+1;
var left = i-1;
while(right<arr.length || left>=0)
{
    if(arr[i]<arr[right])
    {
        var rightGreat=arr[right];
    }
    if(arr[i]<arr[left])
    {
        var leftGreat=arr[left];
    }

   
}

var great=Math.max(rightGreat,leftGreat)
console.log(great);
