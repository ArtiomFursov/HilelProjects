let HAMBURGER = {  
    price: 0,  
    calories: 0,  
size:{
    small: {  
        price: 5,  
        calories: 20  
       },  
       large: {  
        price: 10,  
        calories: 40  
       },  
},
    toppings:{ 
        cheese: {  
            price: 1,  
            calories: 20  
           },  

           salad: {  
            price: 2,  
            calories: 5  
           },  

           potato: {  
            price: 1.5,  
            calories: 10  
           } 
    }, 
    supplements:{ 
        seasoning: {  
            price: 1.5,  
            calories: 0  
           },  
        mayonnaise: {  
            price: 2,  
            calories: 5  
           } 
    } 
}; 

class Hamburger{ 
 constructor(Hambsize) { 
  this.Hambsize = Hambsize; 
   this.price = [];
   this.calories = [];
   if(Hambsize===HAMBURGER.size.small){
    let arr=[];
    arr.push(Hambsize);
    arr.map((item)=>{
        this.price.push(item.price);
        this.calories.push(item.calories);
    });
   }else if(Hambsize===HAMBURGER.size.large){
    let arr=[];
    arr.push(Hambsize);
    arr.map((item)=>{
        this.price.push(item.price);
        this.calories.push(item.calories);
    });
 }else{
   return 'err';
 }
}
addToppings([...args]) { 
  this.args = args.toppings;
  args.map((item) => this.price.push(item.price)), 
  args.map((item) => this.calories.push(item.calories)) 
//   console.log(this.price,this.calories) ;     
} 
addSupplement(supplement){ 
  this.supplement = supplement 
  let res = [];
  res.push(supplement); 
  res.map((item) => this.price.push(item.price)) 
  res.map((item) => this.calories.push(item.calories)) 
  console.log(this.price +" Supl price") 
  console.log(this.calories+" Supl cal") 
} 
getPrice() {
    const sum=this.price.reduce((a,b)=>a+b);
    return 'Price = '+" "+sum ; 
} 
getCalories() {
    const cal = this.calories.reduce((a,b)=>a+b);
    return 'Calories = '+cal;
} 
} 
let burger = new Hamburger(HAMBURGER.size.small);
burger.addToppings([HAMBURGER.toppings.potato,HAMBURGER.toppings.cheese]) 
burger.addSupplement(HAMBURGER.supplements.mayonnaise);
console.log(burger.getPrice());
console.log(burger.getCalories());