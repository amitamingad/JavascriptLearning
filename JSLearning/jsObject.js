var obj = {
    key1 : "it ",
    key2 : function() {return this.key1 + " works!";}
};

alert(obj.key2());