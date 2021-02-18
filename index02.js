function User(name, admin, city) {
    this.name = name;
    this.isAdmin = admin;
    this.city = city;
};

let user1 = new User("Georgi", true, "Sofia");
let user2 = new User("Pesho", false, "Plovdiv");
let user3 = new User("Ivan", false, "Varna");

console.log(user1);
console.log(user2);
console.log(user3);


function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let input = +prompt("Enter value", 0);
        this.value += input;
    };

};

let accumulaor = new Accumulator(0);
accumulaor.read();
accumulaor.read();
accumulaor.read();
accumulaor.read();

console.log(accumulaor.value);