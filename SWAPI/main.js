$('.container').append('<h2 class="h2">People List</h2>');
$('.container').append('<ul class="people"></ul>');

const input = $('#input');
const btn = $('#search');
let peopleArr =[];
 for (let i = 1; i < 10; i++) {
        
        $.ajax({
            url: `https://swapi.dev/api/people/?page=${i}`,
           
        }).done(function(result){
            result.results.map(function(el){
                peopleArr.push(el);
              })
        })
    }
    for (let i = 1; i < 7; i++) {
        $.ajax({
            url: `https://swapi.dev/api/planets/?page=${i}`,
           
        }).done(function(result){
            result.results.map(function(el){
                peopleArr.push(el);
              })
        })
    }
console.log(peopleArr);
$(document).ready(function(){
$('#search').click(function(event){
     event.preventDefault(); 
     let setSpanClass='class'+Math.random(10);
 setSpanClass=setSpanClass.replace(/[\s.,%]/g, '');
 if(input.val()!==''){
peopleArr.map((el)=>{
    if(el.name.toLowerCase()===input.val().toLowerCase()){
        $('.people').append(`<li id='${el.name}'><h3 class="${el.name}">${el.name}</h3><span class="${setSpanClass}"></span></li>`);  
             let str =el.name;
             str=str.split(' ').join('.');
             if(el.homeworld){
                $.ajax({
                    url: `${el.homeworld}`,
                }).done(function(result){
                    // console.log(result.name);
                    el.homeworld=`${result.name}`;
                })
     
            }
            // console.log(el.name);
            Object.entries(el).forEach(([key1,value])=>{
             if(Array.isArray(value)){
                el[key1]='';
                console.log(el[key1]);
           value.forEach((el1)=>{
            $.ajax({
                url:`${el1}`,
               
            }).done(function(result){
               if(result.hasOwnProperty('name')){
                value=result.name;
                // console.log(value+": "+key1);
            if(key1 in el){
                // console.log('value : '+value+" K1:"+key1);
                el[key1]+=value+', '.replace(/,(?![^,]*,)/m, '.');
            }
          
               }if(result.hasOwnProperty('title')){
                // console.log(key1+': '+result.title);
                if(key1 in el){
                    el[key1]+=result.title+', '.replace(/,(?![^,]*,)/m, '.');
                }
               }
            })
           })
             }
            })
        //    console.log(el);
        $(`.${str}`).one('click' ,function(event){
            event.preventDefault(); 
                Object.entries(el).forEach(([key, value]) => {
                    $(`span.${setSpanClass}`).append(`<p> ${key} : ${value}</p>`);
                    $(`span`).click(function(){
                        $('li').remove();
                    })
                    });
        }) 
    }
});
 };
});
});






