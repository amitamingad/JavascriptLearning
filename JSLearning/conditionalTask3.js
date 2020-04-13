var user  = prompt("Who is there");
if(user == "Admin"){
    let password = prompt("enter the passwword");
    if(password == "Welcome!") {
        alert("welcome");
    }else if(password == null){
        alert("canceled");
    }else{
        alert("wrong password");
    }
}else if(user == "" || user == null ){
    alert("canceled");
}else{
    alert("I don't know");
}