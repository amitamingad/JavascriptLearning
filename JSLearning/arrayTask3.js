let i,j;
let k = 0;
let arr =   [[1,2,3],
            [4,5,6],
            [7,8,9]];

for(i = 0; i<3; i++){

    if(k>0){
        for(j =k ; j>=0; j--){
            alert(arr[i][j]);
        }
        k = j+1;
    }
    else{
    for(j=k ; j<3; j++){
        alert(arr[i][j]);
    }
    k=j-1;
    }
}