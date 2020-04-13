let user = {
    name : "GGG",
    age : 23
};
let clone = Object.assign({},[user]);
clone.name = "hehfw";
alert(clone.name);
alert(user.name);
