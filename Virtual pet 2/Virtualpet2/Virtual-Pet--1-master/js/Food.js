class Food {

    constructor() {

        this.foodStock = 100;
        this.lastFed;

        this.milkImg = loadImage("images/Milk.png");
    }

    display() {
        var x = 80, y = 100;

        // imageMode(CENTER);
        // image(this.milkImg, 200, 220, 70, 70);

        if (this.foodStock != 0) {
            for (var i = 0; i < this.foodStock; i++) {
                if (i % 10 == 0) {
                    x = 80;
                    y = y + 50;
                }
                image(this.milkImg, x, y, 50, 50);
                x = x + 30;
            }
        }
    }

    getFoodStock() {

        return this.foodStock;

    
    }
    updateFoodStock(foodStock) {

        this.foodStock = foodStock;
        
    }

    deductFood() {

        if (this.foodStock > 0) {
            this.foodStock = this.foodStock - 1;
        }

    }
    addFoods(){
 
        this.foodStock = this.foodStock + 1;
       
      }
}