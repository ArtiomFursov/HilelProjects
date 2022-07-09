let num = prompt("enter your nubmer");
num = num.replace(/\s+/g, '');
num = parseInt(num);
if(isNaN(num)){
    num = "not valiable";
    console.log(num)
}
let first = 0;
let second = 1;
let res;
if (num<2){
    console.log(first);
}
 else if(num>=2){
    console.log(first);
    console.log(second);
}
for (let i=0;i<=num-3;i++){
res = first + second;
first = second;
second = res; 
console.log(res);
}
// let stairs = prompt('number');
// let numK =1;
// console.log(numK);
// for(let i = 1; i<=1; i++){
//  for(let k = 1;k<=num-1;k++){
//  numK=numK+''+(k+1);
//  let numberNumk = parseInt(numK);
//  console.log(numberNumk); 
//  }
// }
let stairs = prompt('enter the number');
stairs = stairs.replace(/\s+/g, '');
stairs = parseInt(stairs);
if(isNaN(stairs)){
    stairs = "not valiable";
    console.log(stairs)
}
let result;
for(let i =0 ;i<stairs;i++){
    let line ='';
    for(let k=0; k<=i;k++)
    {
    line+=k+1 +" ";
    // result =parseInt(line);
    }
    console.log(line);
}

