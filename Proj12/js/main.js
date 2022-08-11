let p = document.querySelector('#paragraph');
// console.log(p.textContent);

// p.style.cssText='color:red;';

 let res= Array.from(p.textContent.split(" ")).map((el)=>{
    if(el.length>8){
        if(el.endsWith('.')){
            return el+`<br>`
        }
    return `<span class="green">${el}</span>`;
    
   }  if(el.endsWith('.')){
    return el+`<br>`
   }
   else{
    return el;
   }
});

p.innerHTML=res.join(" ").replace(/\?/g, '🤔').replace(/!/g, '😲');
let green = document.querySelectorAll('.green');
for (let i = 0; i <green.length; i++) {
    green[i].style.color='green';
    
}
p.insertAdjacentHTML("afterend", `<a href="https://forcemipsum.com/">https://forcemipsum.com/</a>`);
// let words=-1;
let words=0;
let resWords='';
res.map((el)=>{
   if(el.split(' ')){
    words+=el.split(' ').length;
   resWords=`<span class="center">Words = ${words}</span>`
   } 
});
console.log(resWords);
const heading = document.querySelector('#Heading');
heading.insertAdjacentHTML("afterend" , `${resWords}`)
let center=document.querySelector('.center');
center.style.display="block";
center.style.textAlign='center';









// arr.forEach((el)=>{
//     if(el.length>8){
//         p.el.cssText='color:green;'
//     }
// });






