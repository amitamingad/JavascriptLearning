let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    alert (obj["8:30"]);
    console.log(obj.length);
    if(obj.length > 0)
        return true;
    else
        return false;
}