
class Supplier extends Client{
	accountNumber: string;
    invoiceList: Invoice[];
	constructor(accountNumber: string){
		super();
		this.accountNumber = accountNumber;
        this.invoiceList = new Array<Invoice>(); 
	}
}