var Clothes = class {
    constructor(name, size, price){
        this.name = name;
        this.size = size;
        this.price = price;
    }
}

class Shirt extends Clothes{
  constuctor(){
    super("Red Shirt", "M", "12.50");
  }
}
