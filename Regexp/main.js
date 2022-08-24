//text uppercase
function upperCase(text){ 
    if(text.charAt(0)==text.match("[A-Z]")){ 
   
      console.log("String's first character is uppercase") 
   
    }else{ 
   
      console.log("String's first character is not uppercase") 
   
    } 
   
   } 
   
    
   
   upperCase('Abcd');
   ///       Finding data first method
// function is_dateString(str) { 
//     regexp = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/; 
      
//            if (regexp.test(str)) { 
//                console.log(true); 
//              } 
//            else { 
//                 console.log(false); 
//              } 
//    }  
//    is_dateString("31/12/2021");
/// Finding data second method
function findData(str){
  const yearNow = new Date();
  reg = /\d{1,2}/;
  str=str.split('/');
  regYear= /\d{4}/;
  let day = parseInt(str[0]);
  let month = parseInt(str[1]);
  let year = parseInt(str[2]);
  if(day<32 && str[0].match(reg)&&month<13 && str[1].match(reg)&&str[2].match(regYear)&&year<=yearNow.getFullYear()){
     return true;
  }else{
     return false;
  }
  
  
  }
  
  console.log(findData('10/05/2021'));
   ////                   trim method 
function trim(str){
   return str=str.replace(/^ +| +$|( ) +/g,"$1");
}
console.log(trim('      ololo    sadas  '));
////                    finding Vowels
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
///                   Index USA
function isUSZipCode(str){
regexp =  /(^\d{5}$)|(^\d{5}-\d{4}$)/;
return regexp.test(str);
}

console.log(isUSZipCode('03201-2150'));