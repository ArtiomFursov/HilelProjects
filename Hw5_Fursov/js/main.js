//Function which concatenate arrays
let flattenArr =[[1,2,3],[4,5,6],[7,8,9]];
let concatenateArr = function(arr){
arr = [].concat(...arr);
return arr;
}
console.log(concatenateArr(flattenArr));

//Function which checks for palindrome
let palidnrome = function(word){
    word=prompt('enter whe word');
    let checking=true;
    let res1='';
    let res2='';
    for(let i = 0; i<word.length;i++){
    res1+=word[i].replace(/\s+/g, '');
    res1=res1.toLocaleLowerCase();
    }
    console.log(res1);
    for(let i=word.length-1;i>=0;i--){
     res2+=word[i].replace(/\s+/g, '');
     res2=res2.toLocaleLowerCase();
    }
    console.log(res2);
    if(res1!==res2){
        checking=false;
    }
console.log(word+' = '+ checking);
}
palidnrome();
// sum of numbers 
let addNumber = function(...numbers){
    // let sum=0;


    // for(let i =0;i<numbers.length;i++){
    //    sum=sum+numbers[i];
    // }
    // console.log(sum);
    let sum = numbers.reduce(function(prev,next){
      return prev + next;
    });
    return sum;
}
console.log(addNumber(5,2,9,8));
//Random generate
let generate = function(min , max){
    let check = true;
    let randomNumber;
    if(min>max){
        check=false;
    }else if(min===max){
        check=false;
    }else{
        randomNumber = min-1 + Math.ceil(Math.random() * (max+1-min));
    }
return randomNumber;
}
console.log(generate(1,100));
//Delete array's element
let numbArray=[1,2,3,4,5,6,7];

let delELement = function(arr,par){
    let result;
for(let i =0;i<arr.length;i++){
    if(arr[i]===par){
      result= arr.splice(i,1);
    }
}
return arr;
}
console.log(delELement(numbArray,7));
//Сhange numbers to roman numerals
function convert(num) {
    var c=[
          ['',"I","II","III","IV","V","VI","VII","VIII","IX"],
          ['',"X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
          ['',"C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
          ['',"M","MM","MMM"]
          ];
    // JavaScript% / Расчет имеет десятичные дроби, вам нужно использовать Math.floor для округления в меньшую сторону
    return c[3][Math.floor(num / 1000 % 10)]+c[2][Math.floor(num / 100 % 10)]+c[1][Math.floor(num / 10 % 10)]+c[0][Math.floor(num % 10)];
   }
    
  console.log(convert(150));
   

