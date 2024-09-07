// Shopping Module
class Shopping {
    constructor() {
        this.shoppingList = [];
    }

    addItem(item) {
        this.shoppingList.push(item);
    }

    displayShoppingList() {
        console.log("Shopping List:");
        this.shoppingList.forEach(item => console.log("-", item));
    }
}

// Sample Usage
const shoppingApp = new Shopping();
shoppingApp.addItem("Milk");
shoppingApp.addItem("Eggs");
shoppingApp.displayShoppingList();
