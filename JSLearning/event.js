let selectedTd;
function eventHandler(event){ 
    console.log(event.target);
    if(selectedTd){
        console.log("inside if");
        console.log(selectedTd);
        selectedTd.style.background="white";
        console.log("after changing");
        console.log(selectedTd);
        event.target.style.background="red";
    }
    else{
    event.target.style.background="red";
    }
    selectedTd = event.target;
    
}