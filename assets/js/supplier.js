"use strict";
class Supplier extends Client {
    constructor(accountNumber) {
        super();
        this.accountNumber = accountNumber;
        this.invoiceList = new Array();
    }
}
