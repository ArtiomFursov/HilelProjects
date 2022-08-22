const input = document.querySelector('#input');
const select = document.querySelector('#select');
const button = document.querySelector('#button');
const random = document.querySelector('#random');
const div = document.querySelector('#div');
function getInfo(event){
    event.preventDefault();
    if(select.value==='trivia'){
      input.value=input.value.replace(/\D/g,'');
        fetch('http://numbersapi.com/'+input.value, {
        }).then((response)=>response.text())
        .then((data)=>{
          div.innerHTML+=`<span>${data}</span>`
        });
       
    }else if (select.value==='math'){
      input.value=input.value.replace(/\D/g,'');
        fetch('http://numbersapi.com/'+input.value+'/math', {
        }).then((response)=>response.text())
        .then((data)=>{
          div.innerHTML+=`<span>${data}</span>`
        });
    }else if (select.value==='date'){
      if(input.value.startsWith('/')&&input.value.endsWith('/')||!input.value.includes('/')){
        console.log('err');
      }else{
        fetch('http://numbersapi.com/'+input.value+'/date', {
        }).then((response)=>response.text())
        .then((data)=>{
          div.innerHTML+=`<span>${data}</span>`
        });
      }
    }
    input.value='';

}
function randomInfo(){
 fetch('http://numbersapi.com/random')
 .then((response)=>response.text())
 .then((data)=>{
  div.innerHTML+=`<span>${data}</span>`
});
  
}
button.addEventListener('click',getInfo);
random.addEventListener('click',randomInfo);



