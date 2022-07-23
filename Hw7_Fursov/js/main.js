function replicate(number, times) {
let arr=[];

if(times===1){
    return arr=[number];
}
if(times<=0){
    return arr=[];
}
arr=[number,replicate(number,times-1)];
return arr=[].concat(...arr);
};
console.log(replicate(5,7));

//        Multiply
function specialMultiply(a,b){
    if(a,b){
 return a*b;
    }
        return function(c){
            return a*c;
             };
   

   
}
let res= specialMultiply(5,8);
 
console.log(res);
//guessingGame


function guessingGame(attempts){
    let min = Math.ceil(0);
    let max = Math.floor(11);
    let result = Math.floor(Math.random()*(max-min)+min);
    let guessH='You are too high!';
    let guessL='You are too low!';
    let trueAns='You got it';
    attempts=attempts+1;
    attempts--;
    return function(answer){
    if(answer<result){
     console.log  (guessL);
       }else if(answer>result){
     console.log (guessH);
       }
       else if(answer==result){
       console.log(trueAns);
       attempts=1;
       }
       if(attempts===1){
        guessH="You know the answer. What do you want from me?";
        guessL="You know the answer. What do you want from me?";
        trueAns="You know the answer. What do you want from me?";
        attempts=0;
       }
       else if (attempts<=0){
        guessH=`No more guesses the answer was ${result}! Please start a new game`;
        guessL=`No more guesses the answer was ${result}! Please start a new game`;
        trueAns=`No more guesses the answer was ${result}! Please start a new game`;
       }
    }
}
let game = guessingGame(3);
game(1);
game(2);
game(3);
game(4);
game(5);
game(6);


// console.log(guessingGame());




