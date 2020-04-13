let arr =   [[1,2,3],
    [4,5,6],
    [7,8,9]];

//alert(arr[1]);

for (let i = 0; i < arr.length; i++){
    if(i % 2 == 0) alert(arr[i]);
    else{
        alert(arr[i].reverse());
    }
}

alert(arr);