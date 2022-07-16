let num = prompt("enter your nubmer");
num = num.replace(/\s+/g, '');
num = parseInt(num);
if(isNaN(num)){
    num = "not valiable";
    console.log(num)
}
let first = 0;
let second = 1;

//  else if(num>=2){
//     console.log(first+","+second+",");
//     // console.log(second);
// }
let x= "";
for (let i=0;i<=num-3;i++){
res = first + second;
first = second;
second = res; 
x=x+res+",";
}
if (num===0){
    console.log(first+'');
}
else if(num===1){
    console.log(second+'');
}
else if(num===2){
    console.log(first+','+second);
}
else if(num>2){
    if(x.endsWith(',')){
        x=x.replace(/,(?![^,]*,)/m, '');
        }
    console.log(`0,1,${x}`);
}
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