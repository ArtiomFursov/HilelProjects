let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4,12,1];
let arr3=[];
if(arr1.length>arr2.length){
    arr3.length = arr1.length; 
}else if(arr1.length<arr2.length){
    arr3.length=arr2.length; 
}
else {
    arr3.length=arr1.length;
}
for(let i = 0; i < arr3.length; i++){
    if(arr1[i] && arr2[i]){
     arr3[i]=arr1[i]*arr2[i];
    } 
    if(!arr1[i]){
       arr3[i]=arr2[i];
    }
    if(!arr2[i]){
        arr3[i]=arr1[i];
    }
}
console.log(arr3);
//Finding equal numbers 
let equal = [4,2,34,4,1,12,1,4];
let result_Equal=[];
for(let i=0;i<equal.length;i++){
    for(let k=i+1;k<equal.length;k++){
    if(equal[i]===equal[k]){
        result_Equal.push(equal[i]);
        break;
     }
    }
}
let new_Res_array =[...new Set(result_Equal)];
console.log(new_Res_array);
//Fidning letter in the word
let word = prompt('enter a word');
let str =true;

for(let i=0;i<word.length;i++){
    if(Number(word[i])>=0){
        str===false;
        word = alert('Not a string');
        do{
            word = prompt('Enter a string');
        }while(str===false);
    }
}
let letter = prompt('Enter a letter');
let count=0;
for(let i=0;i<word.length;i++){
if(word[i]===letter){
    count++;
 }

}
if(letter.length>1){
    letter=alert(`it's not a letter`);
}
else if (word.includes(Number(word))){
    word=alert('Use only letters');
}
 else if(Number(letter)){
     letter=alert('Use a letter');
 }
 
else if(word.includes(letter)){
    console.log(`The string contains the following number of '${letter}' letter: ${count}`);

}

else{
    console.log(`this letter doesn't exist in this word`);
}







