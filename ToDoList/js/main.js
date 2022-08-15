const form = document.querySelector('#form');
const input = document.querySelector('#input');
const button = document.querySelector('#button');
const list = document.querySelector('#list');
list.style.listStyle='none';
list.style.padding='0';
button.style.cssText='margin-left:10px;cursor:pointer';
list.style.cssText='display:flex;flex-direction:column;align-items:flex-start;padding:0'
function createElement(event){
event.preventDefault();
 const li = document.createElement(`li`);
 const btnDel = document.createElement('button');
 const btnChange= document.createElement('button');
 const check=document.createElement('input');
 check.type='checkbox';
 btnChange.textContent='change';
 input.value=input.value.trim();
 li.textContent=input.value;
 if(input.value==='')return;
 input.value='';
 btnDel.textContent='remove';
 btnDel.addEventListener('click',(el)=>{
    list.removeChild(li);
 });
 btnChange.addEventListener('click',(el)=>{
    let change=prompt('new element');
    li.textContent=change;
    li.appendChild(btnDel);
    li.appendChild(btnChange);
    li.prepend(check);
 });
 btnDel.style.cssText='cursor:pointer;margin-left:10px;margin-right:10px';
 check.style='margin-right:10px;'
 check.addEventListener('click',(el)=>{
    if(check.checked){
        li.style.cssText='text-decoration:line-through';
    }else{
        li.style.cssText='text-decoration:none';
    }
 });
 

 li.prepend(check);
 li.appendChild(btnDel);
 li.appendChild(btnChange);
 list.append(li);
}
button.addEventListener('click',createElement);





