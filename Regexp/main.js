function upperCase(text){ 
    if(text.charAt(0)==text.match("[A-Z]")){ 
   
      console.log("String's first character is uppercase") 
   
    }else{ 
   
      console.log("String's first character is not uppercase") 
   
    } 
   
   } 
   
    
   
   upperCase('Acd');
function is_dateString(str) { 
    regexp = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/; 
      
           if (regexp.test(str)) { 
               console.log(true); 
             } 
           else { 
                console.log(false); 
             } 
   }  
   is_dateString("31/12/2021");
function trim(str){
   return str=str.replace(/^ +| +$|( ) +/g,"$1");
}
trim('  plolo  ')
console.log(trim('      ololo    sadas  '));
function vowelCount(str){
    let count=0;
  for (let i = 0; i < str.length; i++) {
  if(str[i].match('[a,e,i,o,u,y]')){
    count++;
    // console.log(str[i]);
  }
  }
  return count;

}
vowelCount('The quick brown fox jumps over the lazy dog');
console.log(vowelCount('The quick brown fox jumps over the lazy dog'));
function isUSZipCode(str){
regexp =  /(^\d{5}$)|(^\d{5}-\d{4}$)/;
if(str.match(regexp)){
   return true;
}else{
    return false;
}
}

console.log(isUSZipCode('03201-2150'));