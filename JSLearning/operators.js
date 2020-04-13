let a = 2;
let b = 2;
let c = ++a;
let d = b++;

alert("User Interaction");
let p = prompt("enter the value");
let g = confirm("are you sure");

let str1 = "ayama";
let str2 = "syami";

let len1 = str1.length;
let len2 = str2.length;
console.log(len1);
console.log(len2);
for (let i=0; i<len1;i++)
{
    if(str1[i]>str2[i])
    {
        console.log("string 1 is greater");
        break;
    }
    else{
        console.log("string 2 is greater");
        break;
    }

}

