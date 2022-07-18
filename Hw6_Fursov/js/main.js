//Finding days in month
let findDaysInMonth2 = function(month,year){
        let arr31Days = ['January','March','May','July','August','October','December'];
        let arr30Days = ['April','June','September','November'];
        let feb ='February';
        year = Number(year);
        if(isNaN(year)){
          year = 'enter correct value';
        }
       else if(!year){
            year='enter the year';
        }
        if(arr31Days.includes(month)){
            month = 'This month has 31 days';
        }else if(arr30Days.includes(month)){
            month = 'This month has 30 days';
        }else if(feb===month && year % 4 !== 0){
            month='This month has 28 days';
        }
        else if(year % 4 === 0 || feb === month){
            month='This month has 29 days';
        }
       return month;
    }
console.log(findDaysInMonth2('July',2012));
// Calculator
let calculator = function(operator , firstNumber,secondNumber){
    let result;
  do{
    operator=prompt('Enter operator')
}while(operator!=='+'&&operator!=='-'&&operator!=='*'&&operator!=='/');
do{
    firstNumber=prompt('Enter first number');
}while(!Number(firstNumber));
do{
    secondNumber=prompt('Enter second number');
}while(!Number(secondNumber));
if(operator==='+'){
    result=Number(firstNumber)+Number(secondNumber);
}else if(operator==='-'){
    result=Number(firstNumber)-Number(secondNumber);
}else if(operator='*'){
    result = Number(firstNumber)*Number(secondNumber);
}else {
    result = Number(firstNumber)/Number(secondNumber);
}
return console.log(result);   
}
calculator();
//anagram first method
let anagram = function(str1,str2){
    let result = true;
    let arr = [];
    if(str1.length!==str2.length){
        result=false;
    }else{
        for(let i=0 ;i<str1.length;i++){
            for(let k=0;k<str2.length;k++){
              if(str1[i].toLowerCase()===str2[k].toLowerCase()){
             arr.push(str1[i]);
             break;
              }
            }
        }
    }
if(arr.length!==str2.length){
    result=false;
}
   return result;
}
console.log(anagram("sleep", "speel"));
///Anagram second solution
let anagram2 = function(str1,str2){
    str1=[...new Set(str1)];
    str2=[...new Set(str2)];
    let bool=true;
    if(str1.length!==str2.length){
        bool =false;
    }
    else{
        let arr=[].concat(str1,str2);
        arr=arr.join('');
        let Newarr = [...new Set(arr)];
        console.log(Newarr);
         if(Newarr.length!==str1.length){
          bool=false;
        }
    }
   return bool;
}
console.log(anagram2('sleep','speel'));