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
let count = 0;
getInitData(1,9);
$('#search').click(function(event){
	count++;
	// console.log(count);
	if(count>1){
		$('li').remove();
	}
     event.preventDefault(); 
     let setSpanClass='class'+Math.random(10);
 setSpanClass=setSpanClass.replace(/[\s.,%]/g, '');
 if(input.val()!==''){
        $.ajax({
            url: `https://swapi.dev/api/people/?search=${input.val()}`,
            dataType: 'json',
        }).done(function(result){
                peopleArr = [...result.results];
                $('.people').prepend(`<li id='${result.results[0].name}'><h3 class="${result.results[0].name}">${result.results[0].name}</h3></h3><span class="${setSpanClass}"></li>`) 
				let str =result.results[0].name
				         str=str.split(' ').join('.');			 
			$(`.${str}`).one('click' ,function(){
				Object.entries(peopleArr[0]).every(([key1,value])=>{
					$(`span.${setSpanClass}`).append(`<p> ${key1} : ${value}</p>`);
					if(key1=='gender'){
						return false;
					}
					else{
						return true;
					}
					
				})
				$(`span.${setSpanClass}`).append(`<button class="moreInfo">show full info</button>`);
				peopleArr.map((el)=>{	
					if(el.homeworld){
						function setHomeworld(){
							$.ajax({
								url: `${el.homeworld}`,
								dataType: 'json',
							}).done(function(result){
								el.homeworld=`${result.name}`;
							})
						}	
					}
					function setValueInsteadOfUrl(){
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
					}
					setHomeworld();
					setValueInsteadOfUrl();		
						})
						$(`.moreInfo`).click(function(){
						
							Object.entries(peopleArr[0]).forEach(([key,value])=>{
								$('p').remove();
								$(`span.${setSpanClass}`).append(`<span> ${key} : ${value}</span>`);
								$(`.moreInfo`).remove();
							})
							
						})
						})
						
						
            });
		
 };
});


});






