"use strict";
class Client {
    constructor() {
        this.name = '';
        this.nip = '';
        this.city = '';
        this.street = '';
        this.houseNumber = '';
        this.zipCode = '';
        this.comments = '';
        this.industry = '';
        this.active = false;
    }
    customerInfo() {
        return `Name: ${this.name}, Nip: ${this.nip}, City: ${this.city}, Street: ${this.street}, House Number: ${this.houseNumber}, Zip Code: ${this.zipCode}, Comments: ${this.comments}, Industry: ${this.industry}, Active: ${this.active}`;
    }
}
;
