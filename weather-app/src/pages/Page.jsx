import React, {Component} from 'react';
import axios from "axios";
let API_key = 'd48dd8492f2bc25456abd815cfde086a';
class Page extends Component {
    constructor() {
        super();
        this.state={
            cities_List:[]
        }
    }
    componentDidMount = async () => {
        let text = window.location.pathname;
        text=text.split('');
        text=text.splice(9,).join('');
        let response = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${text}&units=metric&appid=${API_key}`);
        response.data.list.map((el)=>{
            let ms = el.dt*1000;
            el.dt = new Date(ms).toDateString('en', {weekday: 'long'});
            el.main.temp=Math.round(el.main.temp);
            el.main.temp_min=Math.round(el.main.temp_min);
            el.main.temp_max=Math.round(el.main.temp_max);
            el.main.feels_like=Math.round(el.main.feels_like);
        })
            this.setState({
            cities_List:[response.data]

        })
    }
    render() {
        if(this.state.cities_List.length>0){
            function flatten(arr) {
                if (Array.isArray(arr)) {
                    return arr.reduce(function(done,curr){
                        return done.concat(flatten(curr));
                    }, []);
                } else {
                    return arr;
                }
            }
            return (
                <ul className='pageUl'>
                    { this.state.cities_List.map((el)=>{
                        let newArr=[];
                        el.list.map((el)=>{

                            if(el.dt===el.dt){
                               newArr=[...newArr,[el.dt,[el.main.temp_min],[el.main.temp_max]]]
                            }

                        })
                        newArr.reduce(function (prev,current){
                            if(prev[0]===current[0]){
                                prev[1].push(current[1])
                                prev[2].push(current[2])
                            }

                            return current

                   })
                           newArr.map((el)=>{
                              el[1]=flatten(el[1]);
                              el[1]=[...new Set(el[1])];
                               el[2]=flatten(el[2]);
                               el[2]=[...new Set(el[2])];
                      })
                        newArr.reduce((prev,next)=>{
                               if(prev[0]===next[0]){
                                   next.splice(0,);

                               }else{
                                   prev=next;
                               }
                            return prev
                        });
                        newArr.map((el)=>{
                            if(el.length>0){
                                el[1]=Math.min(...el[1]);
                                el[2]=Math.max(...el[2]);
                            }})
                        return <li key={el.city.id} className='DaysOfWeek'>
                            <h2 className='PageCityName'>{el.city.name}</h2>

                            {el.list.map((el)=>{
                             let random=Math.random(0,10);
                                if(el.dt_txt.includes('18:00:00')){

                                    return <div key={random} className='NewPageItem'>
                                        <h3>{el.dt}</h3>
                                        <span className='PageWeatherSpan'>temp:{el.main.temp}º</span>
                                        <span className='PageWeatherSpan'>temp min:{newArr.map((newEl)=>{
                                            if(el.dt===newEl[0]){
                                              return  newEl[1];
                                            }
                                        })}º</span>
                                        <span className='PageWeatherSpan'>temp max:{newArr.map((newEl)=>{
                                            if(el.dt===newEl[0]){
                                            return    newEl[2];
                                            }
                                        })}º</span>
                                        <span className='PageWeatherSpan'>wind speed:{el.wind.speed}s</span>
                                        <span className='PageWeatherSpan'>sea level:{el.main.sea_level}</span>
                                        <span className='PageWeatherSpan'>ground level:{el.main.grnd_level}</span>
                                        <span className='PageWeatherSpan'>Feels like:{el.main.feels_like}</span>
                                        <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon }@2x.png`}></img>
                                    </div>
                                }
                            })}
                        </li>
                    })}
                </ul>
            );
        }else{
            setTimeout(() => {
                return <h2 className='notExist'>This request doesn't exist</h2>
            }, 2000);
        }

    }
}

export default Page;