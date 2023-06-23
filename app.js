class Hamburger{
    constructor(size,stuffing)
    {   this.size = size;
      this.stuffing = stuffing;
      this.toppings = new Array();
    }
    
static SIZE_SMALL={
          calories:50,
           price:20}
 static SIZE_BIG={
          calories:100,
          price:40}
   

static STUFFING_CHEESE={
    calories:20,
    price:10}
  
static STUFFING_SALAD={
    calories:5,
    price:20}
  static STUFFING_POTATO={
    calories:10,
    price:15}
  
static TOPPING_MAYO={
    calories:5,
    price:20}
 
 static TOPPING_SAUCE={
    calories:0,
    price:15}
 



  addTopping(topping) {
    this.toppings.push(topping);
   // console.log(this.toppings);
    return ;
}

 calculateCalories(){
  const toppingCalories = this.toppings.reduce((callback, topping) => callback + topping.calories, 0);
 // console.log(toppingCalories);
 // console.log(this.size.calories);
  return this.size.calories + this.stuffing.calories + toppingCalories;
}
calculatePrice(){
  const toppingPrice = this.toppings.reduce((callback, topping) => callback + topping.price, 0);
 // console.log(toppingPrice);
 // console.log(this.size.price);
   return this.size.price + this.stuffing.price + toppingPrice;
  
}}
    

const hamburger = new Hamburger(Hamburger.SIZE_SMALL,Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log('Калорії(добавка-майонез):', hamburger.calculateCalories());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log('Калорії(а тепер-приправа):', hamburger.calculateCalories());
hamburger.calculatePrice();
console.log('Ціна:',hamburger.calculatePrice());


const hamburgerOne=new Hamburger(Hamburger.SIZE_BIG,Hamburger.STUFFING_SALAD);
hamburgerOne.addTopping(Hamburger.TOPPING_MAYO);
console.log(`Калорії`,hamburgerOne.calculateCalories());
console.log(`Ціна`,hamburgerOne.calculatePrice());