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
function Car(){
    Vehicle.call(this);
    this.numwheels = 4;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor=Vehicle;
const car = new Car();
car.model=`Tesla`;
car.year=2020;
console.log(car.model);
console.log(car.year);
console.log(car.toString());
console.log(car.numwheels);
console.log(car.start());
console.log(car.end());
function Motorcycle(){
    Vehicle.call(this);
    this.numwheels=2;
}
Motorcycle.prototype=Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor=Vehicle;
const motorcycle = new Motorcycle();
motorcycle.model=`Suzuki`;
motorcycle.year=2006;
console.log(motorcycle.model);
console.log(motorcycle.year);
console.log(motorcycle.toString());
console.log(motorcycle.numwheels);
console.log(motorcycle.start());
console.log(motorcycle.end());