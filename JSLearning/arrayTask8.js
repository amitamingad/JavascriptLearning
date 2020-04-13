let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(item => {
    let name = item.name + item.surname;
    let result = {fullName : name, id : item.id};
    return result;
});

    alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith