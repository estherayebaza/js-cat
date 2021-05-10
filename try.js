class Mkulima {
    constructor(farms, vendors, products, orders) {
        this.farms = [];
        this.vendors = [];
        this.products = [];
        this.orders = [];
    }

    addFarm(farmId, name, farmer, phone, address) {
        let farm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address
        }
        this.farms.push(farm);
        return this.farms;
    }

    removeFarm(farmId) {
        let newFarm = this.farms.find(newFarm => newFarm.farmId == farmId);
        return delete this.farms[newFarm];
    }

    updateFarm(farmId, name, farmer, phone, address) {
        let myFarm = this.farms.find(myFarm => myFarm.farmId == farmId);
        myFarm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address,
        }
        return myFarm;
    }
    getFarm(farmId) {
        let kFarm = this.farms.find(kFarm => kFarm.farmId == farmId);
        return kFarm;
    }
    addProduct(productId, name, price) {
        var product = {
            productId: productId,
            name: name,
            price: price,

        }
        this.products.push(product);
        return this.products;
    }
    removeProduct(productId) {
        let removeProduct = this.products.find(removeProduct => removeProduct.productId == productId)
        return delete this.products[removeProduct]
    }
    updateProduct(productId, name, price) {
        let updateProduct = this.products.find(updateProduct => updateProduct.productId == productId);
        updateProduct = {
            productId: productId,
            name: name,
            price: price

        }
        return updateProduct;

    }

    getProduct(productId) {
        let anotherProduct = this.products.find(anotherProduct => anotherProduct.productId == productId);
        return anotherProduct;
    }
    printProducts() {
        for (let product of this.products) {
            console.log(product.name + " " + product.price);
        }
    }
    calculateOrder(productId, quantity) {
        var productCost = productId * quantity;
        return productCost;
    }

}
var mkulima = new Mkulima([], [], [], []);
console.log(mkulima.addFarm(200, "gide and sons", "Gideon", "075678888888", "Kayaga"));
console.log(mkulima.addFarm(300, "kwiringyira and sons", "Amos", "07789654433", "Kihiihi"));
console.log(mkulima.removeFarm(200));
console.log(mkulima.getFarm(300));
console.log(mkulima.addProduct(150, "pineapples", "ug shs 1000"));
console.log(mkulima.addProduct(250, "rice", "ug shs  3000"));
console.log(mkulima.removeProduct(250));
console.log(mkulima.updateProduct(789, "matooke", "ug shs 20,000"));
console.log(mkulima.getProduct(150));
mkulima.printProducts();
console.log(mkulima.calculateOrder(150, 46));
console.log(mkulima.calculateOrder(789, 8));