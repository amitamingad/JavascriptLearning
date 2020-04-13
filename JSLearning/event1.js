changableDiv.onclick = function(event){
   console.log(event.target.tagName);
   event.target.tagName = 'P';
   console.log(x);
}
var x =10;