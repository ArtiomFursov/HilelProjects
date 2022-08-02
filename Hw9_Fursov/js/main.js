let furniture = [
	{
		type: 'desk',
		price: 27.87,
        
	},
	{
		type: 'closet',
		price: 187.32
	},
	{
		type: 'chair',
		price: 79.29
	},
	{
		type: 'bed',
		price: 239.99
	}
  
    
];

let devices = [
	{
		type: 'desktop',
		price: [272, 769]
	},
	{
		type: 'laptop',
		price: [499, 1800]
	},
	{
		type: 'smartphone',
		price: [100, 800]
	},
	{
		type: 'tablet',
		price: [185, 1000]
	},
    {
		type: 'console',
		price: 889
	}
];

let appliances = [
	{
		type: 'oven',
		price: 780
	},
	{
		type: 'microwave',
		price: [50, 1400]
	},
	{
		type: 'mixer',
		price: 215.17
	}
];

function setCategories(arr,categoryName){
 return arr.forEach(el => {
    el.category=categoryName;
     console.log(el);
});
}
setCategories(furniture,`furniture`);
setCategories(devices,`devices`);
setCategories(appliances,`appliances`);
let allArr =[].concat(furniture,devices,appliances);
function Product(category,type,price){
    this.category=category;
    this.type =type;
    this.price=price;
    this.render = function(){
      return  `<tr>
	<td><img src="images/${this.category}/${this.type}.svg" alt="bed" width="50" height="50"></td>
	<td>${this.type}</td>
	<td><b>${this.price}USD</b></td>
</tr>`   
    }
}
const product = new Product('furniture', 'bed', 239.99);
// console.log(product.category); // furniture
// console.log(product.type); // bed
// console.log(product.price); // 239.99
// console.log(product.render()); 
function Category(arr){
   
this.arr=arr;
  return arr.map(el=>new Product(el.category,el.type,el.price).render());
 
}
const categories = new Category(allArr);

console.log(categories);
document.getElementById(`table`).innerHTML=categories.join('');








 

