let arr = ["HTML", "JavaScript", "CSS"];
alert(arr.splice(0,0));
let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
    return arr.splice(0,0).sort();
}