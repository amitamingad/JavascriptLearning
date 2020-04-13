// noinspection JSAnnotator
let user = {
    name : "Syama",
    age : 25,
    dis() {
        display =()=> alert(this.name)
        alert(display());
    }
};
user.dis();