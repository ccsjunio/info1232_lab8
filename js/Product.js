const Product = class{
    constructor(name, department, price, expirationDate){
        this.name = name; //String – the name of the product
        this.department = department; //String – the sec on of the store responsible for the product
        this.price = price, //Float – the price of the item
        this.expirationDate = expirationDate; //Date Object – detailing the expira on date of the product
    }

    /*
    method isExpired
    This func on should return a Boolean.
    ● If the product is expired return true.
    ● If the product is not expired return false.
    Use the Date Object methods to determine this.
    (Current  me – Expira on Time == Difference)
    ● If the difference in  me is a nega ve, the
    expira on date has not passed yet.
    ● If the difference in  me is a posi ve, the
    expira on  me has passed.
    */
   isExpired(){
       let today = new Date();
       console("today = ",today);
   }

}