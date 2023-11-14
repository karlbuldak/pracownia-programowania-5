"use strict";
class Invoice {
    constructor() {
        this.name = '';
        this.quantity = 0;
    }
}
var Unit;
(function (Unit) {
    Unit["meters"] = "m";
    Unit["grams"] = "g";
})(Unit || (Unit = {}));
var Tax;
(function (Tax) {
    Tax[Tax["t23"] = 0.23] = "t23";
    Tax[Tax["t5"] = 0.05] = "t5";
})(Tax || (Tax = {}));
