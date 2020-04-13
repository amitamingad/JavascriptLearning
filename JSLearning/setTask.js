function unique(arr) {
    /* your code */
   let set = new Set(arr);
   for (let value of set){
       alert(value);
   }
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O