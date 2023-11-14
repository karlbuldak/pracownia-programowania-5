class Client{
  name: string = '';
  nip: string = '';
  city: string = '';
  street: string = '';
  houseNumber: string = '';
  zipCode: string = '';
  comments: string = '';
  industry: string = '';
  active: boolean = false;
	constructor(){
	}
	customerInfo(): string{
		return `Name: ${this.name}, Nip: ${this.nip}, City: ${this.city}, Street: ${this.street}, House Number: ${this.houseNumber}, Zip Code: ${this.zipCode}, Comments: ${this.comments}, Industry: ${this.industry}, Active: ${this.active}`
	}
};



