"use strict"

let calculator = {
    sum() {
        let c = this.a + this.b;
        return c;
    },

    mult() {
        let c = this.a + this.b;
        return c;
    },

    read() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mult());