let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
let middle = (styles.length)/2;
styles[middle] = "classic";
styles.shift();
styles.unshift("Rag", "Raggae");
alert(styles.toString());