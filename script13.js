function measureDepth(arr)
{
    if (!arr.length)
    {
     return 1;
    }
    return 1 + measureDepth(arr[0]);
}



console.log(measureDepth( [[[[[[[[[[[]]]]]]]]]]] ) )