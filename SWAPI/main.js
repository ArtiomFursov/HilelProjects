$(document).ready(function(){
	$('.container').append('<h2 class="h2">People List</h2>');
$('.container').append('<ul class="people"></ul>');
const input = $('#input');
const btn = $('#search');
let peopleArr =[];
const getInitData = (index, length) => {
    if(index > length) {
        if (peopleArr.length) {
            peopleArr.forEach((el) => {
                $('.people').append(`<li id='${el.name}'><h3 class="${el.name}">${el.name}</h3></li>`)
            })
           // тут можно вызвать свою функцию где она собирает результат и показывает его
        }
        return;
    }
    $.ajax({
        url: `https://swapi.dev/api/people/?page=${index}`,
        dataType: 'json',
        success: (data) => {
            peopleArr = [...peopleArr, ...data.results];
        },
        complete: () => {
            getInitData(++index, length);
        }
    })
}
console.log(peopleArr);
// getInitData(1,9);
$('#search').click(function(event){
     event.preventDefault(); 
     let setSpanClass='class'+Math.random(10);
 setSpanClass=setSpanClass.replace(/[\s.,%]/g, '');
 if(input.val()!==''){
        $.ajax({
            url: `https://swapi.dev/api/people/?search=${input.val()}`,
            dataType: 'json',
        }).done(function(result){
                peopleArr = [...result.results];
                $('.people').prepend(`<li id='${result.results[0].name}'><h3 class="${result.results[0].name}">${result.results[0].name}</h3></h3><span class="${setSpanClass}"></span></li>`) 
				let str =result.results[0].name
				         str=str.split(' ').join('.');
						 peopleArr.map((el)=>{	
							if(el.homeworld){
								$.ajax({
									url: `${el.homeworld}`,
									dataType: 'json',
								}).done(function(result){
									el.homeworld=`${result.name}`;
								})
							}	
							Object.entries(el).forEach(([key1,value])=>{
								if(Array.isArray(value)){
								   el[key1]='';
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
			$(`.${str}`).one('click' ,function(){
							Object.entries(el).forEach(([key, value]) => {
								$(`span.${setSpanClass}`).append(`<p> ${key} : ${value}</p>`);
                                 $(`span`).click(function(){
							$('li').remove();
						})
						});
						})
						
					
			}) 
            });
 };
});
});






