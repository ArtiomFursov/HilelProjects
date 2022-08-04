function Vehicle (model,year){ 
    this.model = model 
    this.year = year 
  }
Vehicle.prototype={
   start:function(){
        return `The engine has been started`;
    },
    end:function(){
        return `Engine was off`;
    },
    toString:function(){
        return `The model is ${this.model}. Release year ${this.year}`;
    }
}
function Car(model,year){
    Vehicle.call(this);
    this.model=model;
    this.year=year;
    this.numwheels = 4;
}
Car.prototype = Object.create(Vehicle.prototype);
const car = new Car(`Tesla`,2020);
console.log(car.model);
console.log(car.year);
console.log(car.toString());
console.log(car.numwheels);
console.log(car.start());
console.log(car.end());
function Motorcycle(model,year){
    Vehicle.call(this);
    this.model=model;
    this.year=year;
    this.numwheels=2;
}
Motorcycle.prototype=Object.create(Vehicle.prototype);
const motorcycle = new Motorcycle(`Suzuki`,2006);
console.log(motorcycle.model);
console.log(motorcycle.year);
console.log(motorcycle.toString());
console.log(motorcycle.numwheels);
console.log(motorcycle.start());
console.log(motorcycle.end());